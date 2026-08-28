import keywordsData from "@/config/keywords.json";

type Category = keyof typeof keywordsData;
type SubCategory<K extends Category> = keyof (typeof keywordsData)[K];
type Keyword = string;

export interface MatchResult {
  category: Category;
  subCategory: string;
  matched: string[];
}

export function matchKeywords(text: string): MatchResult[] {
  const results: MatchResult[] = [];
  const normalizedText = text.toLowerCase();

  for (const category of Object.keys(keywordsData) as Category[]) {
    const subCategories = keywordsData[category] as Record<string, Keyword[]>;
    for (const subCategory of Object.keys(subCategories)) {
      const keywords = subCategories[subCategory];
      const matched = keywords.filter((kw: string) =>
        normalizedText.includes(kw.toLowerCase())
      );
      if (matched.length > 0) {
        results.push({
          category,
          subCategory,
          matched: matched.slice(0, 3),
        });
      }
    }
  }

  return results;
}

export function calculateResonance(
  userSelfScore: number,
  userText: string,
  userFeelingText: string
): number {
  const textLength = userText.length + userFeelingText.length;
  const matchedResults = matchKeywords(userText + " " + userFeelingText);
  const matchRatio = Math.min(matchedResults.length / 8, 1) * 0.3;
  const lengthRatio = Math.min(textLength / 200, 1) * 0.3;
  const selfScoreRatio = (userSelfScore / 100) * 0.4;

  return Math.round((matchRatio + lengthRatio + selfScoreRatio) * 100);
}

export function extractUniquePerspective(
  userFeelingText: string,
  allMatchedKeywords: string[]
): string | null {
  if (userFeelingText.length < 20) return null;

  const normalizedText = userFeelingText.toLowerCase();
  const hasMatch = allMatchedKeywords.some((kw: string) =>
    normalizedText.includes(kw.toLowerCase())
  );

  if (hasMatch) return null;
  return userFeelingText.slice(0, 50);
}
