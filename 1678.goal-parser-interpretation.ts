/*
 * @lc app=leetcode id=1678 lang=typescript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
function interpret(command: string): string {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
}
// @lc code=end
