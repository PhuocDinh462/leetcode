/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start

// Helper function to check if a character is a digit
function myAtoi(s: string): number {
  let digits = ""; // To store the numeric part of the string
  let sum = 0; // To store the final integer value
  let signIndex = -1; // To store the index of the sign character
  let firstDigitIndex = -1; // To store the index of the first digit

  // Iterate through the string to extract digits and handle signs
  for (let i = 0; i < s.length; i++) {
    // Digit case
    if (s[i] >= "0" && s[i] <= "9") {
      digits += s[i];
      if (firstDigitIndex === -1) firstDigitIndex = i;
    }

    // Whitespace case
    else if (s[i] === " ") {
      if (firstDigitIndex !== -1) break;
      continue;
    }

    // Sign case
    else if (s[i] === "-" || s[i] === "+") {
      if (firstDigitIndex === -1) {
        if (signIndex === -1) signIndex = i;
        else return 0; // Invalid input if multiple signs are found
      } else break;
      continue;
    }

    // Break on encountering any non-digit, non-space, non-sign character
    else break;
  }

  // Check if the sign is immediately followed by a digit
  if (firstDigitIndex !== -1 && signIndex !== -1 && firstDigitIndex - signIndex !== 1) return 0;

  // Convert the extracted digits to an integer
  for (let i = 0; i < digits.length; i++) {
    sum += (digits[i].charCodeAt(0) - 48) * Math.pow(10, digits.length - i - 1);
  }

  // Apply the sign to the integer
  sum *= s[signIndex] === "-" ? -1 : 1;

  // Clamp the result to the 32-bit signed integer range
  return Math.max(-2147483648, Math.min(2147483647, sum));
}
// @lc code=end
