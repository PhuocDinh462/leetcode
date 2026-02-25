/*
 * @lc app=leetcode id=1356 lang=typescript
 *
 * [1356] Sort Integers by The Number of 1 Bits
 */

// @lc code=start
function sortByBits(arr: number[]): number[] {
  return arr.sort(
    (a, b) =>
      a.toString(2).replaceAll("0", "").length - b.toString(2).replaceAll("0", "").length || a - b,
  );
}
// @lc code=end
