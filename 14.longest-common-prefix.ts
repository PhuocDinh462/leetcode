/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let result = strs.reduce((a, b) => (a.length < b.length ? a : b));

  strs.forEach((value) => {
    for (let i = 0; i < value.length; i++) {
      if (!result) return "";
      else if (value.substring(0, result.length) === result) break;
      result = result.substring(0, result.length - 1);
    }
  });

  return result;
}
// @lc code=end
