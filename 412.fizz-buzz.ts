/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    i = i + 1;
    return i % 3 === 0 && i % 5 === 0
      ? "FizzBuzz"
      : i % 3 === 0
      ? "Fizz"
      : i % 5 === 0
      ? "Buzz"
      : i.toString();
  });
}
// @lc code=end
