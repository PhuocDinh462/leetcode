/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k %= nums.length;

  const rotatedArr = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));

  rotatedArr.forEach((e, i) => (nums[i] = e));
}
// @lc code=end
