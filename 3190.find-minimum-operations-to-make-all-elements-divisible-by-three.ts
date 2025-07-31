/*
 * @lc app=leetcode id=3190 lang=typescript
 *
 * [3190] Find Minimum Operations to Make All Elements Divisible by Three
 */

// @lc code=start
function minimumOperations(nums: number[]): number {
  return nums.reduce((a, b) => a + +(b % 3 !== 0), 0);
}
// @lc code=end
