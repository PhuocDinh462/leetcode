/*
 * @lc app=leetcode id=2351 lang=typescript
 *
 * [2351] First Letter to Appear Twice
 */

// @lc code=start
function repeatedCharacter(s: string): string {
  const charSet = new Set<string>();

  for (let c of s) {
    if (charSet.has(c)) return c;
    charSet.add(c);
  }

  return "";
}
// @lc code=end
