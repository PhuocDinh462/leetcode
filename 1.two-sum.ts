/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const setInt = new Set<number>();
  let arr = Array<number>();
  let i: number;

  for (i = 0; i < nums.length; i++) {
    if (setInt.has(target - nums[i])) break;
    setInt.add(nums[i]);
  }

  for (let j = 0; j < i; j++) {
    if (target - nums[i] === nums[j]) arr.push(j, i);
  }

  return arr;
}
// @lc code=end
