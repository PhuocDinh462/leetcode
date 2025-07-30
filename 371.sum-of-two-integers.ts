/*
 * @lc app=leetcode id=371 lang=typescript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
function getSum(a: number, b: number): number {
  let sum = 0;
  let carry = 1;

  while (carry !== 0) {
    sum = a ^ b;
    carry = (a & b) << 1;
    a = sum;
    b = carry;
  }

  return sum;
}
// @lc code=end
