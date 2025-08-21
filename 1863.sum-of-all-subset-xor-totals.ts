/*
 * @lc app=leetcode id=1863 lang=typescript
 *
 * [1863] Sum of All Subset XOR Totals
 */

// @lc code=start
function subsetXORSum(nums: number[]): number {
  let res = 0;

  for (let mask = 0; mask < 1 << nums.length; mask++) {
    const subset: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if ((mask >> i) & 1) subset.push(nums[i]);
    }
    res += subset.reduce((a, b) => a ^ b, 0);
  }

  return res;
}
// @lc code=end
