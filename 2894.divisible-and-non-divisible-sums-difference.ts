/*
 * @lc app=leetcode id=2894 lang=typescript
 *
 * [2894] Divisible and Non-divisible Sums Difference
 */

// @lc code=start
function differenceOfSums(n: number, m: number): number {
  let res = (n * (n + 1)) / 2;

  for (let i = 1; i * m <= n; i++) {
    res -= i * m * 2;
  }

  return res;
}
// @lc code=end
