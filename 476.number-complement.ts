/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((e) => (e === "1" ? "0" : "1"))
      .join(""),
    2
  );
}
// @lc code=end
