/*
 * @lc app=leetcode id=3083 lang=typescript
 *
 * [3083] Existence of a Substring in a String and Its Reverse
 */

// @lc code=start
function isSubstringPresent(s: string): boolean {
  const subString = new Set<string>();

  for (let i = 0; i < s.length - 1; i++) {
    subString.add(s[i] + s[i + 1]);
  }

  for (let i = s.length - 1; i > 0; i--) {
    if (subString.has(s[i] + s[i - 1])) return true;
  }

  return false;
}
// @lc code=end
