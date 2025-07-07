/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const sArray = s.split(" ");

  if (pattern.length !== sArray.length) return false;

  const wordMap = new Map<string, string>();
  const wordSet = new Set<string>();

  for (let i = 0; i < pattern.length; i++) {
    if (!wordMap.has(pattern[i]) && !wordSet.has(sArray[i])) {
      wordMap.set(pattern[i], sArray[i]);
      wordSet.add(sArray[i]);
    } else if (wordMap.get(pattern[i]) != sArray[i]) return false;
  }

  return true;
}
// @lc code=end
