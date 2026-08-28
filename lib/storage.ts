const STORAGE_KEY = "nzyy_intent_data";

export interface IntentData {
  初心文本?: string;
  共鸣评分?: number;
  感受文本?: string;
  报告ID?: string;
  共鸣度?: number;
}

export function saveIntentData(data: Partial<IntentData>): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getIntentData();
    const updated = { ...existing, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // localStorage 不可用时静默失败
  }
}

export function getIntentData(): IntentData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function clearIntentData(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage 不可用时静默失败
  }
}
