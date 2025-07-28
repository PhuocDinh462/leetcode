/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
  if (n <= 1) return n;

  let cur = 0;
  let prev1 = 1;
  let prev2 = 0;

  for (let i = 2; i <= n; i++) {
    cur = prev1 + prev2;
    prev2 = prev1;
    prev1 = cur;
  }

  return cur;
}
// @lc code=end
