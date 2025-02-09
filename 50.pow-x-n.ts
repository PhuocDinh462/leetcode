/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if (x === 1) return 1;
  else if (x === -1) {
    if (n % 2 === 0) return -x;
    else return x;
  }

  if (n === 0) return 1;
  else if (n % 2 === 0) return myPow(x * x, n / 2);
  else if (n < 0) return myPow(1 / x, -n);

  let result = x;
  for (let i = 1; i < n; i++) result *= x;

  return result;
}
// @lc code=end
