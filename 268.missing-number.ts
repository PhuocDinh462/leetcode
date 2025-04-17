/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++, result += i) {
    result -= nums[i];
  }

  return result;
}
// @lc code=end
