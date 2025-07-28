/*
 * @lc app=leetcode id=3622 lang=typescript
 *
 * [3622] Check Divisibility by Digit Sum and Product
 */

// @lc code=start
function checkDivisibility(n: number): boolean {
  let sum = 0;
  let product = 1;

  for (let tmp = n; tmp > 0; tmp = Math.floor(tmp / 10)) {
    const digit = tmp % 10;
    sum += digit;
    product *= digit;
  }

  return n % (sum + product) === 0;
}
// @lc code=end
