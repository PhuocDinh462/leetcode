/*
 * @lc app=leetcode id=442 lang=typescript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
  const res: number[] = [];

  nums.forEach((n) => {
    const i = Math.abs(n) - 1;

    nums[i] *= -1;

    if (nums[i] > 0) res.push(i + 1);
  });

  return res;
}
// @lc code=end
