/*
 * @lc app=leetcode id=2351 lang=typescript
 *
 * [2351] First Letter to Appear Twice
 */

// @lc code=start
function repeatedCharacter(s: string): string {
  const charSet = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const prevSize = charSet.size;

    charSet.add(s[i]);

    if (charSet.size === prevSize) return s[i];
  }

  return "";
}
// @lc code=end
