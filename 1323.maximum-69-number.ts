/*
 * @lc app=leetcode id=1323 lang=typescript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
function maximum69Number(num: number): number {
  return +num.toString().replace("6", "9");
}
// @lc code=end
