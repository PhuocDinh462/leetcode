/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [3516] Find Closest Person
 */

// @lc code=start
function findClosest(x: number, y: number, z: number): number {
  const xDis = Math.abs(x - z);
  const yDis = Math.abs(y - z);

  if (xDis < yDis) return 1;
  if (yDis < xDis) return 2;
  return 0;
}
// @lc code=end
