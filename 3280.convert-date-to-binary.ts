/*
 * @lc app=leetcode id=3280 lang=typescript
 *
 * [3280] Convert Date to Binary
 */

// @lc code=start
function convertDateToBinary(date: string): string {
  return date
    .split("-")
    .map((e) => (+e).toString(2))
    .join("-");
}
// @lc code=end
