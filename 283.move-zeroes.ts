/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let numberOfZeroDigit = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      numberOfZeroDigit++;
    }
  }

  for (let i = 0; i < numberOfZeroDigit; i++) nums.push(0);
}
// @lc code=end
