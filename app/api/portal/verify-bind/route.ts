import { NextRequest, NextResponse } from "next/server";
import { verifyPortalToken } from "@/lib/portal";

export async function POST(request: NextRequest) {
  try {
    const { token, target_app } = await request.json();

    if (!token || !target_app) {
      return NextResponse.json(
        { error: "缺少必要参数" },
        { status: 400 }
      );
    }

    if (!["wxcl", "lzti"].includes(target_app)) {
      return NextResponse.json(
        { error: "无效的目标应用" },
        { status: 400 }
      );
    }

    const result = await verifyPortalToken(token, target_app as "wxcl" | "lzti");

    if (!result.valid) {
      return NextResponse.json(
        { error: result.error, valid: false },
        { status: 400 }
      );
    }

    return NextResponse.json({
      valid: true,
      phone: result.phone,
    });
  } catch (err) {
    console.error("[verify-bind error]", err);
    return NextResponse.json(
      { error: "服务端错误" },
      { status: 500 }
    );
  }
}
