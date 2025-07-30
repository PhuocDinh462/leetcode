/*
 * @lc app=leetcode id=1470 lang=typescript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
  const res: number[] = [];

  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[n + i]);
  }

  return res;
}
// @lc code=end
