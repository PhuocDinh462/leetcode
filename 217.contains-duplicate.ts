/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  let setNumber: Set<Number> = new Set();

  for (let i = 0, lastSize = 0; i < nums.length; i++, lastSize = setNumber.size) {
    setNumber.add(nums[i]);
    if (setNumber.size === lastSize) return true;
  }

  return false;
}
// @lc code=end
