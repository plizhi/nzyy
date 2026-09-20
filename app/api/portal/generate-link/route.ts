import { NextRequest, NextResponse } from "next/server";
import { generatePortalToken, buildBindLink, findOrCreatePortalUser } from "@/lib/portal";

const APP_URLS: Record<string, string> = {
  wxcl: "https://wxcl.nzyy.cc",
  lzti: "https://lzti.nzyy.cc",
};

export async function POST(request: NextRequest) {
  try {
    const { phone, target_app, nickname } = await request.json();

    if (!phone || !target_app) {
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

    // 注册/记录门户用户
    const user = await findOrCreatePortalUser(phone, nickname);

    // 生成跳转 token
    const token = await generatePortalToken(phone, target_app as "wxcl" | "lzti");

    // 构建跳转链接
    const bindLink = buildBindLink(APP_URLS[target_app], phone, token);

    return NextResponse.json({
      success: true,
      link: bindLink,
      token,
      expires_in: 600, // 10分钟
    });
  } catch (err) {
    console.error("[generate-link error]", err);
    return NextResponse.json(
      { error: "服务端错误" },
      { status: 500 }
    );
  }
}
