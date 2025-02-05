/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let result: number[] = [];

  // Traverse the top row
  for (let i = 0; i < matrix[0].length; i++) result.push(matrix[0][i]);
  matrix.shift();

  // Traverse the right column
  if (matrix.length === 0 || matrix[0].length === 0) return result;
  for (let i = 0, j = matrix[0].length - 1; i < matrix.length; i++) {
    result.push(matrix[i][j]);
    matrix[i].pop();
  }

  // Traverse the bottom row
  if (matrix.length === 0 || matrix[0].length === 0) return result;
  for (let i = matrix[0].length - 1, j = matrix.length - 1; i >= 0; i--) result.push(matrix[j][i]);
  matrix.pop();

  // Traverse the left column
  if (matrix.length === 0 || matrix[0].length === 0) return result;
  for (let i = matrix.length - 1; i >= 0; i--) {
    result.push(matrix[i][0]);
    matrix[i].shift();
  }

  if (matrix) return result.concat(spiralOrder(matrix));
  return result;
}
// @lc code=end
