/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
  let sumLeft = 0;
  let sumRight = 0;

  for (const n of nums) sumRight += n;

  for (let i = 0; i < nums.length; i++) {
    sumLeft += nums[i];
    if (sumLeft === sumRight) return i;
    sumRight -= nums[i];
  }

  return -1;
}
// @lc code=end
