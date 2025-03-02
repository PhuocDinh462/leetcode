/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  else if (s[0] === ")" || s[0] === "]" || s[0] === "}") return false;
  else if (s[s.length - 1] === "(" || s[s.length - 1] === "[" || s[s.length - 1] === "{")
    return false;

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ")":
        if (stack[stack.length - 1] === "(") stack.pop();
        else return false;
        break;
      case "]":
        if (stack[stack.length - 1] === "[") stack.pop();
        else return false;
        break;
      case "}":
        if (stack[stack.length - 1] === "{") stack.pop();
        else return false;
        break;
      default:
        stack.push(s[i]);
    }
  }

  return stack.length === 0;
}
// @lc code=end
