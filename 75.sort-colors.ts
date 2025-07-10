/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  const swap = (i: number, j: number) => {
    if (i === j) return;
    nums[i] += nums[j];
    nums[j] = nums[i] - nums[j];
    nums[i] -= nums[j];
  };

  while (mid <= high) {
    if (nums[mid] == 0) {
      swap(mid, low);
      low++;
      mid++;
    } else if (nums[mid] == 1) mid++;
    else {
      swap(mid, high);
      high--;
    }
  }
}
// @lc code=end
