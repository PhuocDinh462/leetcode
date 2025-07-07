/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  if (n === 0) return false;

  if (n === 1 || n === 2) return true;

  for (; n % 2 === 0; n /= 2);

  return n === 1 || n % 2 === 0;
}
// @lc code=end
