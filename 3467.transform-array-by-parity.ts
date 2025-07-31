/*
 * @lc app=leetcode id=3467 lang=typescript
 *
 * [3467] Transform Array by Parity
 *
 */

// @lc code=start
function transformArray(nums: number[]): number[] {
  let even = 0;

  nums.forEach((n) => {
    if (n % 2 === 0) even++;
  });

  return Array(even)
    .fill(0)
    .concat(Array(nums.length - even).fill(1));
}
// @lc code=end
