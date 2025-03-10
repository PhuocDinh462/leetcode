/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  const result = haystack.split(needle)[0].length;
  return result !== haystack.length ? result : -1;
}
// @lc code=end
