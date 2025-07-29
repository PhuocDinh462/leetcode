/*
 * @lc app=leetcode id=179 lang=typescript
 *
 * [179] Largest Number
 */

// @lc code=start
function largestNumber(nums: number[]): string {
  nums.sort((a, b) => +(b.toString() + a.toString()) - +(a.toString() + b.toString()));

  return nums[0] === 0 ? "0" : nums.join("");
}
// @lc code=end
