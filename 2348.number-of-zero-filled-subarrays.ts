/*
 * @lc app=leetcode id=2348 lang=typescript
 *
 * [2348] Number of Zero-Filled Subarrays
 */

// @lc code=start
function zeroFilledSubarray(nums: number[]): number {
  function groupZeros(arr: number[]): number[][] {
    const res: number[][] = [];
    let curr: number[] = [];
    for (const x of arr) {
      if (x === 0) {
        curr.push(0);
      } else {
        if (curr.length) {
          res.push(curr);
          curr = [];
        }
      }
    }
    if (curr.length) res.push(curr);
    return res;
  }

  return groupZeros(nums).reduce(
    (total, group) => total + (group.length * (group.length + 1)) / 2,
    0
  );
}
// @lc code=end
