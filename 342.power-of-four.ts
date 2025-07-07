/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  if (n === 0) return false;

  if (n === 1 || n === 4) return true;

  for (; n % 4 === 0; n /= 4);

  return n === 1 || n % 4 === 0;
}
// @lc code=end
