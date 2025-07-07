/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  const sqrt = num ** 0.5;

  return sqrt === Math.floor(sqrt);
}
// @lc code=end
