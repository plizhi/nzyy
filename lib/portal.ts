import crypto from "crypto";
import { query, queryOne } from "@/lib/db";

const TOKEN_SECRET = process.env.PORTAL_SECRET || "nzyy-portal-secret-key-change-in-production";
const TOKEN_EXPIRE_MINUTES = 10;

export interface PortalUser {
  id: number;
  phone: string;
  nickname: string | null;
  created_at: Date;
  source: string;
}

export interface TokenInfo {
  phone: string;
  target_app: string;
  expires_at: Date;
}

/**
 * 生成跳转 token
 */
export async function generatePortalToken(
  phone: string,
  targetApp: "wxcl" | "lzti"
): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRE_MINUTES * 60 * 1000);

  await query(
    `INSERT INTO portal_tokens (phone, token, target_app, expires_at)
     VALUES ($1, $2, $3, $4)`,
    [phone, token, targetApp, expiresAt]
  );

  return token;
}

/**
 * 验证 token 并返回手机号
 */
export async function verifyPortalToken(
  token: string,
  targetApp: "wxcl" | "lzti"
): Promise<{ valid: boolean; phone?: string; error?: string }> {
  const record = await queryOne<{
    phone: string;
    target_app: string;
    expires_at: Date;
    used_at: Date | null;
  }>(
    `SELECT phone, target_app, expires_at, used_at
     FROM portal_tokens
     WHERE token = $1`,
    [token]
  );

  if (!record) {
    return { valid: false, error: "token不存在" };
  }

  if (record.target_app !== targetApp) {
    return { valid: false, error: "token目标应用不匹配" };
  }

  if (record.used_at) {
    return { valid: false, error: "token已使用" };
  }

  if (new Date() > record.expires_at) {
    return { valid: false, error: "token已过期" };
  }

  // 标记为已使用
  await query(
    `UPDATE portal_tokens SET used_at = NOW() WHERE token = $1`,
    [token]
  );

  return { valid: true, phone: record.phone };
}

/**
 * 注册或获取门户用户
 */
export async function findOrCreatePortalUser(
  phone: string,
  nickname?: string
): Promise<PortalUser> {
  const existing = await queryOne<PortalUser>(
    `SELECT * FROM portal_users WHERE phone = $1`,
    [phone]
  );

  if (existing) {
    await query(
      `UPDATE portal_users SET last_login_at = NOW() WHERE phone = $1`,
      [phone]
    );
    return existing;
  }

  const created = await queryOne<PortalUser>(
    `INSERT INTO portal_users (phone, nickname)
     VALUES ($1, $2)
     RETURNING *`,
    [phone, nickname || null]
  );

  return created!;
}

/**
 * 构建跳转链接
 */
export function buildBindLink(
  baseUrl: string,
  phone: string,
  token: string
): string {
  const params = new URLSearchParams({
    phone,
    token,
    from: "nzyy",
  });
  return `${baseUrl}/bind?${params.toString()}`;
}
