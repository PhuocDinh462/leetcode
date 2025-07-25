/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < k) {
      if (i !== j - 1 && nums[j] === nums[j - 1]) {
        j++;
        continue;
      }
      if (k < nums.length && nums[k] === nums[k + 1]) {
        k--;
        continue;
      }

      if (nums[j] + nums[k] === -nums[i]) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      } else if (nums[j] + nums[k] > -nums[i]) k--;
      else j++;
    }
  }

  return result;
}
// @lc code=end
