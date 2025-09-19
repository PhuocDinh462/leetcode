/*
 * @lc app=leetcode id=137 lang=typescript
 *
 * [137] Single Number II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const bitArr = Array(32).fill(0);

  for (const n of nums) {
    const bitArrN = (n >>> 0).toString(2).padStart(32, "0").split("").map(Number);

    for (let i = 0; i < bitArr.length; i++) bitArr[i] += bitArrN[i];
  }

  return parseInt(bitArr.map((e) => e % 3).join(""), 2) << 0;
}
// @lc code=end
