/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  let result: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let layer = 0, currentValue = 1; ; layer++) {
    // Traverse the top row
    for (let i = layer; i < n - layer; i++, currentValue++) {
      result[layer][i] = currentValue;
    }

    // Traverse the right column
    if (currentValue >= n * n) return result;
    for (let i = layer + 1; i < n - layer - 1; i++, currentValue++) {
      result[i][n - layer - 1] = currentValue;
    }

    // Traverse the bottom row
    if (currentValue >= n * n) return result;
    for (let i = n - layer - 1; i >= layer; i--, currentValue++) {
      result[n - layer - 1][i] = currentValue;
    }

    // Traverse the left column
    if (currentValue >= n * n) return result;
    for (let i = n - layer - 2; i > layer; i--, currentValue++) {
      result[i][layer] = currentValue;
    }
  }
}
// @lc code=end
