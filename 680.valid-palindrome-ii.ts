/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  function isPalindrome(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return (
        // Try removing the left element
        isPalindrome(s.slice(0, i) + s.slice(i + 1)) ||
        // Try removing the right element
        isPalindrome(s.slice(0, s.length - i - 1) + s.slice(s.length - i))
      );
    }
  }

  return true;
}
// @lc code=end
