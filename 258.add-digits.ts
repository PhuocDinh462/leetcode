/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
  while (true) {
    let result = 0;

    for (; num > 0; result += num % 10, num = Math.floor(num / 10));

    if (result < 10) return result;

    num = result;
  }
}
// @lc code=end
