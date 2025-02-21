/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
  if (height.length === 0) return 0;

  let lIndex = 0;
  let lMax = 0;

  let rIndex = height.length - 1;
  let rMax = 0;

  let result = 0;

  while (lIndex < rIndex) {
    if (height[lIndex] <= height[rIndex]) {
      if (height[lIndex] >= lMax) lMax = height[lIndex];
      else result += lMax - height[lIndex];
      lIndex++;
    } else {
      if (height[rIndex] >= rMax) rMax = height[rIndex];
      else result += rMax - height[rIndex];
      rIndex--;
    }
  }

  return result;
}
// @lc code=end
