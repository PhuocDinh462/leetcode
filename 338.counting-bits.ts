/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
  return Array.from({ length: n + 1 }, (_, i) => i).map(
    (e) =>
      e
        .toString(2)
        .split("")
        .filter((e) => e === "1").length
  );
}
// @lc code=end
