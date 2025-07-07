/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  if (n === 0) return false;

  if (n === 1 || n === 3) return true;

  for (; n % 3 === 0; n /= 3);

  return n === 1 || n % 3 === 0;
}
// @lc code=end
