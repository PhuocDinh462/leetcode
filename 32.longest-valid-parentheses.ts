/*
 * @lc app=leetcode id=32 lang=typescript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  const stack: number[] = [-1];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else {
      stack.pop();

      if (stack.length === 0) stack.push(i);
      else maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
    }
  }

  return maxLength;
}
// @lc code=end