/*
 * @lc app=leetcode id=3000 lang=typescript
 *
 * [3000] Maximum Area of Longest Diagonal Rectangle
 */

// @lc code=start
function areaOfMaxDiagonal(dimensions: number[][]): number {
  let candidates: number[][] = [];

  for (let i = 0, largest = 0; i < dimensions.length; i++) {
    const d = dimensions[i][0] ** 2 + dimensions[i][1] ** 2;

    if (d > largest) {
      candidates = [];
      candidates.push(dimensions[i]);
      largest = d;
    } else if (d === largest) {
      candidates.push(dimensions[i]);
    }
  }

  return Math.max(...candidates.map((e) => e[0] * e[1]));
}
// @lc code=end
