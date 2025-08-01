/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n === 0) return false;

  for (; n % 2 === 0; n /= 2);
  for (; n % 3 === 0; n /= 3);
  for (; n % 5 === 0; n /= 5);

  return n === 1;
}
// @lc code=end
