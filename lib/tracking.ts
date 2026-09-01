/**
 * 埋点客户端
 * 事件命名规范：产品_对象_动作
 * 示例：nzyy_test_start, nzyy_register, wxcl_record_create
 */

interface TrackParams {
  [key: string]: string | number | boolean | undefined;
}

// 事件名映射（中文 → 英文规范）
const EVENT_NAME_MAP: Record<string, string> = {
  "首页浏览": "nzyy_page_view",
  "首页浏览完成": "nzyy_page_complete",
  "三入口点击": "nzyy_entry_click",
  "初心交互开始": "nzyy_test_start",
  "初心文本提交": "nzyy_test_submit",
  "初心文本跳过": "nzyy_test_skip",
  "评分完成": "nzyy_score_complete",
  "感受提交": "nzyy_feeling_submit",
  "报告生成": "nzyy_report_generate",
  "海报生成": "nzyy_poster_generate",
  "海报分享": "nzyy_poster_share",
  "海报回流访问": "nzyy_poster回流",
  "工具入口点击": "nzyy_tool_click",
  "工具跳转成功": "nzyy_tool_jump",
};

// 客户端环境检测
function getDeviceType(): string {
  if (typeof window === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone/i.test(ua)) return "mobile";
  if (/tablet|ipad/i.test(ua)) return "tablet";
  return "desktop";
}

function getBrowserName(): string {
  if (typeof window === "undefined") return "unknown";
  const ua = navigator.userAgent;
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edge")) return "Edge";
  return "unknown";
}

function getOsName(): string {
  if (typeof window === "undefined") return "unknown";
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iOS")) return "iOS";
  return "unknown";
}

// 生成会话ID
function getSessionId(): string {
  if (typeof sessionStorage === "undefined") return "";
  let sid = sessionStorage.getItem("track_session_id");
  if (!sid) {
    sid = `s_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    sessionStorage.setItem("track_session_id", sid);
  }
  return sid;
}

// 获取设备ID（匿名用户）
function getDeviceId(): string {
  if (typeof localStorage === "undefined") return "";
  let did = localStorage.getItem("track_device_id");
  if (!did) {
    did = `d_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    localStorage.setItem("track_device_id", did);
  }
  return did;
}

interface SendEventOptions {
  event_name: string;
  user_id?: string;
  properties?: Record<string, any>;
}

async function sendEvent(options: SendEventOptions): Promise<void> {
  const { event_name, user_id, properties } = options;

  // 开发环境打印日志
  if (process.env.NODE_ENV !== "production") {
    console.log("[埋点]", event_name, properties);
    return;
  }

  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name,
        user_id: user_id || getDeviceId(),
        session_id: getSessionId(),
        site_id: "nzyy",
        url: typeof window !== "undefined" ? window.location.href : undefined,
        referrer:
          typeof document !== "undefined" ? document.referrer : undefined,
        device_type: getDeviceType(),
        browser_name: getBrowserName(),
        os_name: getOsName(),
        properties: properties || {},
      }),
    });
  } catch (err) {
    console.error("[埋点失败]", err);
  }
}

export function trackPageView(pageName: string): void {
  sendEvent({ event_name: "nzyy_page_view", properties: { page: pageName } });
}

export function trackEntryClick(entryName: string): void {
  sendEvent({ event_name: "nzyy_entry_click", properties: { entry: entryName } });
}

export function trackIntentStart(sourcePage: string): void {
  sendEvent({ event_name: "nzyy_test_start", properties: { source: sourcePage } });
}

export function trackIntentSubmit(textLength: number): void {
  sendEvent({ event_name: "nzyy_test_submit", properties: { textLength } });
}

export function trackIntentSkip(): void {
  sendEvent({ event_name: "nzyy_test_skip" });
}

export function trackScoreComplete(score: number): void {
  sendEvent({ event_name: "nzyy_score_complete", properties: { score } });
}

export function trackFeelingSubmit(textLength: number): void {
  sendEvent({ event_name: "nzyy_feeling_submit", properties: { textLength } });
}

export function trackReportGenerate(
  共鸣度: number,
  是否跳过文本: boolean,
  报告ID: string
): void {
  sendEvent({
    event_name: "nzyy_report_generate",
    properties: { 共鸣度, 是否跳过文本, 报告ID },
  });
}

export function trackPosterGenerate(报告ID: string): void {
  sendEvent({ event_name: "nzyy_poster_generate", properties: { 报告ID } });
}

export function trackPosterShare(channel: string): void {
  sendEvent({ event_name: "nzyy_poster_share", properties: { channel } });
}

export function trackToolClick(toolName: string): void {
  sendEvent({ event_name: "nzyy_tool_click", properties: { tool: toolName } });
}

export function trackToolJump(toolName: string): void {
  setTimeout(() => {
    sendEvent({ event_name: "nzyy_tool_jump", properties: { tool: toolName } });
  }, 500);
}

// 通用上报接口（供其他产品调用）
export function track(
  eventName: string,
  params?: TrackParams,
  userId?: string
): void {
  const mappedName = EVENT_NAME_MAP[eventName] || eventName;
  sendEvent({
    event_name: mappedName,
    properties: params as Record<string, any>,
    user_id: userId,
  });
}
