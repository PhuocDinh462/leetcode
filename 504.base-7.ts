/*
 * @lc app=leetcode id=504 lang=typescript
 *
 * [504] Base 7
 */

// @lc code=start
function convertToBase7(num: number): string {
  let maxPow = 0;
  let res = "";
  const isNegative = num < 0;

  num = Math.abs(num);

  for (; 7 ** (maxPow + 1) <= num; maxPow++);

  while (maxPow >= 0) {
    let digit = 0;

    for (; (digit + 1) * 7 ** maxPow <= num; digit++);

    res += digit;
    num -= digit * 7 ** maxPow--;
  }

  return isNegative ? "-" + res : res;
}
// @lc code=end
