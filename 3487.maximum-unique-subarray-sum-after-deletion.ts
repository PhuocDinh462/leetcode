/*
 * @lc app=leetcode id=3487 lang=typescript
 *
 * [3487] Maximum Unique Subarray Sum After Deletion
 */

// @lc code=start

function maxSum(nums: number[]): number {
  nums.sort((a, b) => b - a);

  if (nums[0] < 0) return nums[0];

  const sub = Array.from(new Set(nums)).filter((n) => n > 0);

  if (sub.length === 0) return 0;

  return sub.reduce((a, b) => a + b);
}

// @lc code=end
