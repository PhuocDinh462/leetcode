/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  else if (x.toString() === x.toString().split("").reverse().join("")) return true;
  return false;
}
// @lc code=end
