/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function jump(nums: number[]): number {
  let jumps = 0;

  for (let i = 0, maxReach = 0, lastJumpEnd = -1; i < nums.length - 1; i++) {
    maxReach = Math.max(i + nums[i], maxReach);

    if (i >= lastJumpEnd) {
      jumps++;
      lastJumpEnd = maxReach;
    }
  }

  return jumps;
}
// @lc code=end
