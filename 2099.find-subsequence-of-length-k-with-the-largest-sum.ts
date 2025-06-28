/*
 * @lc app=leetcode id=2099 lang=typescript
 *
 * [2099] Find Subsequence of Length K With the Largest Sum
 */

// @lc code=start
function maxSubsequence(nums: number[], k: number): number[] {
  return nums
    .map((n, i) => [n, i])
    .sort((a, b) => a[0] - b[0])
    .slice(nums.length - k, nums.length)
    .sort((a, b) => a[1] - b[1])
    .map((n) => n[0]);
}
// @lc code=end
