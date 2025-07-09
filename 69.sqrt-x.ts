/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  let result = x / 2;

  while (Math.floor(result) ** 2 !== x) {
    const newVal = (result + x / result) / 2;

    if (newVal === result) break;

    result = newVal;
  }

  return Math.floor(result);
}
// @lc code=end
