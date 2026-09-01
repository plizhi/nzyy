import { NextRequest, NextResponse } from "next/server";
import { query, queryOne } from "@/lib/db";

interface TrackEvent {
  event_name: string;
  user_id?: string;
  session_id?: string;
  site_id: string;
  url?: string;
  referrer?: string;
  device_type?: string;
  browser_name?: string;
  os_name?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  properties?: Record<string, any>;
  timestamp?: string;
}

function sanitizeUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    // 剔除敏感参数
    const sensitiveParams = [
      "token",
      "access_token",
      "refresh_token",
      "phone",
      "mobile",
      "email",
      "password",
      "pwd",
    ];
    const params = new URLSearchParams(parsed.search);
    sensitiveParams.forEach((p) => params.delete(p));
    parsed.search = params.toString();
    return parsed.toString();
  } catch {
    return url;
  }
}

function validateEvent(event: TrackEvent): string | null {
  if (!event.event_name) return "event_name is required";
  if (!event.site_id) return "site_id is required";
  if (!["nzyy", "wxcl", "lzti"].includes(event.site_id)) {
    return "invalid site_id";
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const event: TrackEvent = await request.json();

    // 验证
    const error = validateEvent(event);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // 数据清洗
    const cleanUrl = sanitizeUrl(event.url);
    const cleanReferrer = sanitizeUrl(event.referrer);
    const cleanUserId = event.user_id || "anonymous";

    // 写入 events 表
    await query(
      `INSERT INTO events (
        user_id, session_id, event_name, timestamp,
        site_id, url, referrer, device_type, browser_name, os_name,
        utm_source, utm_medium, utm_campaign, properties
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
      [
        cleanUserId,
        event.session_id || null,
        event.event_name,
        event.timestamp ? new Date(event.timestamp) : new Date(),
        event.site_id,
        cleanUrl || null,
        cleanReferrer || null,
        event.device_type || "unknown",
        event.browser_name || null,
        event.os_name || null,
        event.utm_source || null,
        event.utm_medium || null,
        event.utm_campaign || null,
        JSON.stringify(event.properties || {}),
      ]
    );

    // 新用户首次出现记录
    if (cleanUserId !== "anonymous") {
      const existing = await queryOne<{ user_id: string }>(
        "SELECT user_id FROM users WHERE user_id = $1",
        [cleanUserId]
      );
      if (!existing) {
        await query(
          `INSERT INTO users (user_id, first_seen_time, first_site_id, first_traffic_source)
           VALUES ($1, $2, $3, $4)`,
          [
            cleanUserId,
            event.timestamp ? new Date(event.timestamp) : new Date(),
            event.site_id,
            event.utm_source || null,
          ]
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[track API error]", err);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}

// GET for testing
export async function GET() {
  return NextResponse.json({
    message: "Tracking API",
    usage: "POST /api/track with event data",
  });
}
