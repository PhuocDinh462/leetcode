/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  if (target <= nums[0]) return 0;
  else if (target > nums[nums.length - 1]) return nums.length;

  let l = 0;
  let r = nums.length - 1;

  while (true) {
    if (r - l <= 1) return r;

    const m = Math.floor((r + l) / 2);

    if (target === nums[m]) return m;
    else if (target < nums[m]) r = m;
    else l = m;
  }
}
// @lc code=end
