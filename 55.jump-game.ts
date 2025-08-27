/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;

  for (let i = 0, maxIndex = 0; i < nums.length - 1; i++) {
    maxIndex = Math.max(i + nums[i], maxIndex);
    if (maxIndex >= nums.length - 1) return true;
    else if (maxIndex === 0 || maxIndex === i) return false;
  }

  return false;
}
// @lc code=end
