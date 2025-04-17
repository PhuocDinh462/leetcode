/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  return (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, b) => a + b);
}
// @lc code=end
