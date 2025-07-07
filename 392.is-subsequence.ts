/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[0]) s = s.slice(1);
  }

  return s.length === 0;
}
// @lc code=end
