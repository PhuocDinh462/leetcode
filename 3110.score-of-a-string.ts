/*
 * @lc app=leetcode id=3110 lang=typescript
 *
 * [3110] Score of a String
 */

// @lc code=start
function scoreOfString(s: string): number {
  let res = 0;

  for (let i = 0; i < s.length - 1; i++) {
    res += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }

  return res;
}
// @lc code=end
