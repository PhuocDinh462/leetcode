/*
 * @lc app=leetcode id=2413 lang=typescript
 *
 * [2413] Smallest Even Multiple
 */

// @lc code=start
function smallestEvenMultiple(n: number): number {
  return n % 2 === 0 ? n : n * 2;
}
// @lc code=end
