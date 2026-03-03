/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const wordMapS = new Map<string, string>();
  const wordMapT = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    if (
      (wordMapS.has(s[i]) && wordMapS.get(s[i]) !== t[i]) ||
      (wordMapT.has(t[i]) && wordMapT.get(t[i]) !== s[i])
    )
      return false;

    wordMapS.set(s[i], t[i]);
    wordMapT.set(t[i], s[i]);
  }

  return true;
}
// @lc code=end
