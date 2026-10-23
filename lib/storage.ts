const STORAGE_KEY = "nzyy_intent_data";

export interface IntentData {
  answers?: number[];
  初心文本?: string;
  共鸣评分?: number;
  感受文本?: string;
  报告ID?: string;
  共鸣度?: number;
}

const RETEST_COUNT_KEY = "nzyy_retest_count";

export interface RetestCount {
  date: string; // YYYY-MM-DD
  count: number;
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

export function getTodayRetestCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(RETEST_COUNT_KEY);
    if (!raw) return 0;
    const data: RetestCount = JSON.parse(raw);
    const today = new Date().toISOString().split("T")[0];
    if (data.date !== today) return 0;
    return data.count;
  } catch {
    return 0;
  }
}

export function incrementTodayRetestCount(): void {
  if (typeof window === "undefined") return;
  try {
    const today = new Date().toISOString().split("T")[0];
    const raw = localStorage.getItem(RETEST_COUNT_KEY);
    let data: RetestCount = { date: today, count: 0 };
    if (raw) {
      const existing: RetestCount = JSON.parse(raw);
      if (existing.date === today) {
        data = existing;
      }
    }
    data.count += 1;
    localStorage.setItem(RETEST_COUNT_KEY, JSON.stringify(data));
  } catch {
    // localStorage 不可用时静默失败
  }
}
