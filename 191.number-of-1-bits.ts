/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
  return n
    .toString(2)
    .split("")
    .filter((c) => c === "1").length;
}
// @lc code=end
