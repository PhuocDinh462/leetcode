/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map<string, number>();

  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (const c of t) {
    if (!map.has(c)) return false;
    else if (map.get(c) === 1) map.delete(c);
    else map.set(c, map.get(c)! - 1);
  }

  return true;
}
// @lc code=end
