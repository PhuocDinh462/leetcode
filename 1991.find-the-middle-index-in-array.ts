/*
 * @lc app=leetcode id=1991 lang=typescript
 *
 * [1991] Find the Middle Index in Array
 */

// @lc code=start
function findMiddleIndex(nums: number[]): number {
  let sumLeft = 0;
  let sumRight = nums.reduce((a, b) => a + b);

  for (let i = 0; i < nums.length; i++) {
    sumLeft += nums[i];
    if (sumLeft === sumRight) return i;
    sumRight -= nums[i];
  }

  return -1;
}
// @lc code=end
