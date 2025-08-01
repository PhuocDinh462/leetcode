/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    const tmp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = tmp;
  }
}
// @lc code=end
