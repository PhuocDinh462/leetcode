/*
 * @lc app=leetcode id=1784 lang=typescript
 *
 * [1784] Check if Binary String Has at Most One Segment of Ones
 */

// @lc code=start
function checkOnesSegment(s: string): boolean {
  return s.split("0").filter((val) => val !== "").length === 1;
}
// @lc code=end
