/*
 * @lc app=leetcode id=1920 lang=typescript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
  return nums.map((n) => nums[n]);
}
// @lc code=end
