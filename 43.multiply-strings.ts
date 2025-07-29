/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
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
      let digitSum = +num1[i] + +num2[i];

      if (hasSurplus) {
        digitSum++;
        hasSurplus = false;
      }

      if (digitSum > 9) hasSurplus = true;

      res = (digitSum % 10).toString() + res;
    }

    for (let i = remainStr.length - 1; i >= 0; i--) {
      let digit = +remainStr[i];

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

  if (num1 === "0" || num2 === "0") return "0";

  let carry = 0;
  let res = "0";

  for (let i = num1.length - 1; i >= 0; i--) {
    const digit1 = +(num1[i] ?? 0);
    let productStr = "";

    for (let j = num2.length - 1; j >= 0; j--) {
      const digit2 = +(num2[j] ?? 0);
      const digitProduct = digit2 * digit1 + carry;
      carry = 0;

      if (j > 0) {
        productStr = (digitProduct % 10) + productStr;
        carry = Math.floor(digitProduct / 10);
      } else {
        productStr = digitProduct.toString() + productStr;
      }
    }

    for (let k = 0; k < num1.length - 1 - i; k++) {
      productStr += "0";
    }

    res = addStrings(res, productStr);
  }

  return res;
}
// @lc code=end
