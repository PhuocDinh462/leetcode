/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  for (let i = 1, val = nums[0]; i < nums.length; i++) {
    if (nums[i] === val) nums.splice(i--, 1);
    else val = nums[i];
  }

  return nums.length;
}
// @lc code=end
