/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  const constrain = (n: number): number => {
    if (n < -2147483648) return -2147483648; // -2^31
    else if (n > 2147483647) return 2147483647; // 2^31 - 1
    return n;
  };

  let isNegative = false;
  let result = 0;

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (dividend === divisor) return isNegative ? -1 : 1;
  if (divisor === 1) return constrain(isNegative ? -dividend : dividend);

  while (dividend - divisor >= 0) {
    let bit = 0;
    let i = divisor;

    while (dividend - (i << 1) >= 0 && i << 1 > 0) {
      i <<= 1;
      bit++;
    }

    dividend -= i;
    result += 1 << bit;
  }

  return constrain(isNegative ? -result : result);
}
