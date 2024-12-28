/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let substring = "";
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (substring.includes(s[i])) {
      s = s.substring(s.indexOf(s[i]) + 1, s.length);
      i = 0;
      substring = s[0];
    } else {
      substring += s[i];
      const slen = substring.length;
      if (slen > result) result = slen;
    }
  }

  return result;
}
// @lc code=end
