/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const sArr: Array<string> = [];

  s = s.toLowerCase().trim();

  for (let i = 0; i < s.length; i++) {
    if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "0" && s[i] <= "9")) {
      sArr.push(s[i]);
    }
  }

  return sArr.join("") === sArr.reverse().join("");
}
// @lc code=end
