/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  if (x == 0) return 0;

  const isNegative = x < 0;
  if (x < 0) x = -x;

  for (; x % 10 === 0; x = Math.floor(x / 10));

  let result = x;
  let length = 0;

  for (; result > 0; result = Math.floor(result / 10), length++);

  for (let i = length - 1; i >= 0; i--, x = Math.floor(x / 10)) {
    result += (x % 10) * 10 ** i;
  }

  if (isNegative) result = -result;

  return result < -2147483648 || result > 2147483647 ? 0 : result;
}
// @lc code=end
