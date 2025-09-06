/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
  const charMap = new Map<string, number>();
  let res = 0;

  for (const c of s) {
    if (charMap.has(c)) charMap.set(c, charMap.get(c)! + 1);
    else charMap.set(c, 1);
  }

  for (const [key, val] of charMap) {
    if (val % 2 === 0) {
      res += val;
      charMap.delete(key);
    } else {
      res += val - 1;
      charMap.set(key, 1);
    }
  }

  if (charMap.size > 0) res++;

  return res;
}
// @lc code=end
