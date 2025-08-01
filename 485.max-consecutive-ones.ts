/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let res = 0;
  let count = 0;

  for (const n of nums) {
    if (n === 1) {
      count++;
      if (res < count) res = count;
    } else count = 0;
  }

  return res;
}
// @lc code=end
