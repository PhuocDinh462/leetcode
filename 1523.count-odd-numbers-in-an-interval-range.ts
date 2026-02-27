/*
 * @lc app=leetcode id=1523 lang=typescript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
function countOdds(low: number, high: number): number {
  if (low % 2 === 0 && high % 2 === 0) return (high - low) / 2;
  return Math.floor((high - low) / 2) + 1;
}
// @lc code=end
