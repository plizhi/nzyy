import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// 企业微信机器人 webhook URL（从环境变量获取）
const WECOM_WEBHOOK_URL = process.env.WECOM_WEBHOOK_URL;

interface ContactForm {
  name?: string;
  phone?: string;
  message?: string;
}

async function sendToWecom(form: ContactForm): Promise<boolean> {
  if (!WECOM_WEBHOOK_URL) {
    console.log("[contact] WECOM_WEBHOOK_URL not configured, skipping");
    return false;
  }

  const content = `📩 新的留言

👤 姓名：${form.name || "未填写"}
📱 电话：${form.phone || "未填写"}
💬 留言：
${form.message || "未填写"}

---
时间：${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}`;

  try {
    const res = await fetch(WECOM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ msgtype: "text", text: { content } }),
    });
    return res.ok;
  } catch (err) {
    console.error("[contact] Failed to send to WeCom:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const form: ContactForm = await request.json();

    if (!form.phone || !form.message) {
      return NextResponse.json({ error: "缺少必填字段" }, { status: 400 });
    }

    // 1. 保存到数据库
    try {
      await query(
        `INSERT INTO contact_messages (name, phone, message, source)
         VALUES ($1, $2, $3, $4)`,
        [form.name || "", form.phone, form.message, "nzyy"]
      );
    } catch (err) {
      console.error("[contact] Database insert failed:", err);
      // 数据库失败不影响消息发送
    }

    // 2. 发送到企业微信
    const sent = await sendToWecom(form);

    return NextResponse.json({
      success: true,
      message: sent ? "已提交并通知客服" : "已提交",
    });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ error: "服务端错误" }, { status: 500 });
  }
}
