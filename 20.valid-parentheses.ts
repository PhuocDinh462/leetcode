/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  let prevLength;

  while (prevLength !== s.length) {
    prevLength = s.length;
    s = s.replace(/\(\)|\[\]|\{\}/g, "");
  }

  return s.length === 0;
}
// @lc code=end
