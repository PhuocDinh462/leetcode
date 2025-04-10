/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let result: String[] = [];

  for (let i = 0; columnNumber > 0; i++) {
    const surplus = Math.floor(columnNumber / 26 ** i) % 26 || 26;

    result.unshift(String.fromCharCode(64 + surplus));

    columnNumber -= surplus * 26 ** i;
  }

  return result.join("");
}
// @lc code=end
