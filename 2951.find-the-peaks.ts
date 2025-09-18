/*
 * @lc app=leetcode id=2951 lang=typescript
 *
 * [2951] Find the Peaks
 */

// @lc code=start
function findPeaks(mountain: number[]): number[] {
  const res: number[] = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) res.push(i);
  }

  return res;
}
// @lc code=end
