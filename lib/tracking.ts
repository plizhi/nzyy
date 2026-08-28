type EventName =
  | "首页浏览"
  | "首页浏览完成"
  | "三入口点击"
  | "初心交互开始"
  | "初心文本提交"
  | "初心文本跳过"
  | "评分完成"
  | "感受提交"
  | "报告生成"
  | "海报生成"
  | "海报分享"
  | "海报回流访问"
  | "工具入口点击"
  | "工具跳转成功";

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

const isDev = process.env.NODE_ENV !== "production";

function sendEvent(eventName: EventName, params?: EventParams): void {
  if (isDev) {
    console.log("[埋点]", eventName, params);
    return;
  }

  // TODO: 替换为实际埋点平台
  // 示例: window.gtag?.("event", eventName, params);
}

export function trackPageView(pageName: string): void {
  sendEvent("首页浏览" as EventName);
}

export function trackEntryClick(entryName: string): void {
  sendEvent("三入口点击", { 入口名称: entryName });
}

export function trackIntentStart(sourcePage: string): void {
  sendEvent("初心交互开始", { 来源页面: sourcePage });
}

export function trackIntentSubmit(textLength: number): void {
  sendEvent("初心文本提交", { 文本长度: textLength });
}

export function trackIntentSkip(): void {
  sendEvent("初心文本跳过");
}

export function trackScoreComplete(score: number): void {
  sendEvent("评分完成", { 分数: score });
}

export function trackFeelingSubmit(textLength: number): void {
  sendEvent("感受提交", { 文本长度: textLength });
}

export function trackReportGenerate(
 共鸣度: number,
  是否跳过文本: boolean,
  报告ID: string
): void {
  sendEvent("报告生成", {
    共鸣度分数: 共鸣度,
    是否跳过文本,
    报告ID,
  });
}

export function trackPosterGenerate(报告ID: string): void {
  sendEvent("海报生成", { 报告ID });
}

export function trackPosterShare(channel: string): void {
  sendEvent("海报分享", { 分享渠道: channel });
}

export function trackToolClick(toolName: string): void {
  sendEvent("工具入口点击", { 工具名称: toolName });
}

export function trackToolJump(toolName: string): void {
  // 延迟500ms后调用，假设跳转未被中断
  setTimeout(() => {
    sendEvent("工具跳转成功", { 工具名称: toolName });
  }, 500);
}
