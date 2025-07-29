/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let remainStr =
    num1.length > num2.length
      ? num1.slice(0, num1.length - num2.length)
      : num2.slice(0, num2.length - num1.length);

  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");

  let res = "";
  let hasSurplus = false;

  for (let i = 0; i < Math.min(num1.length, num2.length); i++) {
    const digit1 = num1[i].charCodeAt(0) - "0".charCodeAt(0);
    const digit2 = num2[i].charCodeAt(0) - "0".charCodeAt(0);
    let digitSum = digit1 + digit2;

    if (hasSurplus) {
      digitSum++;
      hasSurplus = false;
    }

    if (digitSum > 9) hasSurplus = true;

    res = (digitSum % 10).toString() + res;
  }

  for (let i = remainStr.length - 1; i >= 0; i--) {
    let digit = remainStr[i].charCodeAt(0) - "0".charCodeAt(0);

    if (hasSurplus) {
      digit++;
      hasSurplus = false;
    }

    if (digit > 9) hasSurplus = true;

    res = (digit % 10).toString() + res;
  }

  if (hasSurplus) res = "1" + res;

  return res;
}
// @lc code=end
