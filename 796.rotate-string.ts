/*
 * @lc app=leetcode id=796 lang=typescript
 *
 * [796] Rotate String
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  const sArr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (goal === sArr.join("")) return true;
    sArr.push(sArr[0]);
    sArr.shift();
  }

  return false;
}
// @lc code=end
