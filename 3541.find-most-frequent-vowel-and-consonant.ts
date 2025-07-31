/*
 * @lc app=leetcode id=3541 lang=typescript
 *
 * [3541] Find Most Frequent Vowel and Consonant
 */

// @lc code=start
function maxFreqSum(s: string): number {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  const vowelMap = new Map<string, number>();
  const consonantMap = new Map<string, number>();

  for (const c of s) {
    if (vowelSet.has(c)) vowelMap.set(c, (vowelMap.get(c) ?? 0) + 1);
    else consonantMap.set(c, (consonantMap.get(c) ?? 0) + 1);
  }

  return (
    Math.max(...Array.from(vowelMap.values()), 0) +
    Math.max(...Array.from(consonantMap.values()), 0)
  );
}
// @lc code=end
