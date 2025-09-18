/*
 * @lc app=leetcode id=162 lang=typescript
 *
 * [162] Find Peak Element
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (true) {
    const m = Math.trunc((l + r) / 2);

    if (nums[m] > (nums[m - 1] ?? -Infinity) && nums[m] > (nums[m + 1] ?? -Infinity)) return m;
    else if (nums[m] < nums[m + 1]) l = m + 1;
    else r = m;
  }
}
// @lc code=end
