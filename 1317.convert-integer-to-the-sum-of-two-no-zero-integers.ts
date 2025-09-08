/*
 * @lc app=leetcode id=1317 lang=typescript
 *
 * [1317] Convert Integer to the Sum of Two No-Zero Integers
 */

// @lc code=start
function getNoZeroIntegers(n: number): number[] {
  for (let i = 1; i < n; i++) {
    if (i.toString().includes("0") || (n - i).toString().includes("0")) continue;
    return [i, n - i];
  }

  return [];
}
// @lc code=end
