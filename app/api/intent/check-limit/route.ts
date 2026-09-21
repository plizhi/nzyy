import { NextRequest, NextResponse } from "next/server";
import { query, queryOne } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const phone = request.nextUrl.searchParams.get("phone");

    if (!phone) {
      return NextResponse.json(
        { error: "缺少手机号" },
        { status: 400 }
      );
    }

    // 获取今天0点的时间
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 查询今天该手机号的测试次数
    const result = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM intent_tests
       WHERE phone = $1 AND created_at >= $2`,
      [phone, today.toISOString()]
    );

    const todayCount = parseInt(result?.count || "0", 10);

    // 查询最近一次测试时间（用于判断2周内是否有记录）
    const latest = await queryOne<{ created_at: Date }>(
      `SELECT created_at FROM intent_tests
       WHERE phone = $1
       ORDER BY created_at DESC LIMIT 1`,
      [phone]
    );

    // 2周前的时间
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

    const hasRecentRecord = latest && new Date(latest.created_at) > twoWeeksAgo;

    // 查询最新一条记录的ID（用于可能的覆盖操作）
    const latestRecord = await queryOne<{ id: number }>(
      `SELECT id FROM intent_tests
       WHERE phone = $1
       ORDER BY created_at DESC LIMIT 1`,
      [phone]
    );

    return NextResponse.json({
      success: true,
      today_count: todayCount,
      remaining: Math.max(0, 3 - todayCount),
      can_test: todayCount < 3,
      has_recent_record: !!hasRecentRecord,
      latest_record_id: latestRecord?.id || null,
    });
  } catch (err) {
    console.error("[intent/check-limit error]", err);
    return NextResponse.json(
      { error: "服务端错误" },
      { status: 500 }
    );
  }
}
