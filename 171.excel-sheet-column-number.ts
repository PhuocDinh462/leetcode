/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  let result = 0;

  for (let i = 0, j = columnTitle.length - 1; i < columnTitle.length; i++, j--) {
    result += (columnTitle[i].charCodeAt(0) - 64) * 26 ** j;
  }

  return result;
}
// @lc code=end
