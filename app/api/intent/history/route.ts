import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const phone = request.nextUrl.searchParams.get("phone");

    if (!phone) {
      return NextResponse.json(
        { error: "缺少手机号" },
        { status: 400 }
      );
    }

    const tests = await query<{
      id: number;
      answers: number[];
      score: number;
      ai_insight: string | null;
      created_at: Date;
    }>(
      `SELECT id, answers, score, ai_insight, created_at
       FROM intent_tests
       WHERE phone = $1
       ORDER BY created_at DESC
       LIMIT 20`,
      [phone]
    );

    return NextResponse.json({
      success: true,
      tests: tests.map((t) => ({
        id: t.id,
        answers: t.answers,
        score: t.score,
        ai_insight: t.ai_insight,
        created_at: t.created_at,
      })),
    });
  } catch (err) {
    console.error("[intent/history error]", err);
    return NextResponse.json(
      { error: "服务端错误" },
      { status: 500 }
    );
  }
}
