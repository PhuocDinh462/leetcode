/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const res: number[] = [];

  nums.forEach((n) => {
    if (nums[Math.abs(n) - 1] > 0) nums[Math.abs(n) - 1] *= -1;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }

  return res;
}
// @lc code=end
