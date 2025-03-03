/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] <= 9) return digits;
    else {
      digits[i] = 0;
      if (i === 0) return [1, ...digits];
    }
  }

  return digits;
}
// @lc code=end
