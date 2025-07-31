/*
 * @lc app=leetcode id=2667 lang=typescript
 *
 * [2667] Create Hello World Function
 */

// @lc code=start
function createHelloWorld() {
  return function (...args): string {
    return "Hello World";
  };
}
// @lc code=end
