/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const result: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    const row: number[] = [];

    for (let j = matrix[i].length - 1; j >= 0; j--) row.push(matrix[j][i]);

    result.push(row);
  }

  for (let i = 0; i < matrix.length; i++) matrix[i] = result[i];
}
// @lc code=end
