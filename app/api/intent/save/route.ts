import { NextRequest, NextResponse } from "next/server";
import { query, queryOne } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { phone, answers, score, ai_insight, overwrite, record_id } = await request.json();

    if (!phone || !answers || score === undefined) {
      return NextResponse.json(
        { error: "缺少必要参数" },
        { status: 400 }
      );
    }

    if (!Array.isArray(answers) || answers.length !== 9) {
      return NextResponse.json(
        { error: "答案数量不正确" },
        { status: 400 }
      );
    }

    // 查找用户（可能通过bind已有记录，也可能没有）
    const user = await queryOne<{ id: number }>(
      `SELECT id FROM portal_users WHERE phone = $1`,
      [phone]
    );

    const userId = user?.id || null;

    let result;

    if (overwrite && record_id) {
      // 覆盖模式：更新已有记录
      result = await queryOne<{ id: number; created_at: Date }>(
        `UPDATE intent_tests
         SET answers = $1, score = $2, ai_insight = $3, created_at = NOW()
         WHERE id = $4 AND phone = $5
         RETURNING id, created_at`,
        [JSON.stringify(answers), score, ai_insight || null, record_id, phone]
      );
    } else {
      // 新增模式
      result = await queryOne<{ id: number; created_at: Date }>(
        `INSERT INTO intent_tests (user_id, phone, answers, score, ai_insight)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, created_at`,
        [userId, phone, JSON.stringify(answers), score, ai_insight || null]
      );
    }

    return NextResponse.json({
      success: true,
      id: result?.id,
      created_at: result?.created_at,
      overwritten: !!overwrite,
    });
  } catch (err) {
    console.error("[intent/save error]", err);
    return NextResponse.json(
      { error: "服务端错误" },
      { status: 500 }
    );
  }
}
