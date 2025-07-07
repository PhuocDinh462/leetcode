/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  const wordMap = new Map<string, string>();
  const wordSet = new Set<string>();

  for (let i = 0; i < pattern.length; i++) {
    if (!wordMap.has(pattern[i]) && !wordSet.has(words[i])) {
      wordMap.set(pattern[i], words[i]);
      wordSet.add(words[i]);
    } else if (wordMap.get(pattern[i]) != words[i]) return false;
  }

  return true;
}
// @lc code=end
