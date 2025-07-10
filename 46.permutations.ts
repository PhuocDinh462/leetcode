/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  if (nums.length === 1) return [nums];
  else if (nums.length === 2)
    return [
      [nums[0], nums[1]],
      [nums[1], nums[0]],
    ];

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const sub = permute(nums.slice(0, i).concat(nums.slice(i + 1)));

    sub.forEach((val) => {
      result.push([nums[i]].concat(val));
    });
  }

  return result;
}
// @lc code=end
