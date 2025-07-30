/*
 * @lc app=leetcode id=819 lang=typescript
 *
 * [819] Most Common Word
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
  const words = paragraph
    .toLowerCase()
    .replace(/[^a-z\s,]+|,+/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");

  const wordMap = new Map<string, number>();

  for (const w of words) {
    if (wordMap.has(w)) wordMap.set(w, wordMap.get(w)! + 1);
    else wordMap.set(w, 1);
  }

  const res = Array.from(wordMap)
    .sort((a, b) => b[1] - a[1])
    .map((val) => val[0]);

  for (const w of res) {
    if (!banned.includes(w)) return w;
  }

  return "";
}
// @lc code=end
