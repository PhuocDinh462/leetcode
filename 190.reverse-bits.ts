/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
function reverseBits(n: number): number {
  return parseInt((n >>> 0).toString(2).padStart(32, "0").split("").reverse().join(""), 2);
}
// @lc code=end
