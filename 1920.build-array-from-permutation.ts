/*
 * @lc app=leetcode id=1920 lang=typescript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
  const res: number[] = [];

  for (const n of nums) {
    res.push(nums[n]);
  }

  return res;
}
// @lc code=end
