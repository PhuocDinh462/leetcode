/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  let charCodeSumS = 0;
  let charCodeSumT = 0;

  for (let i = 0; i < s.length; i++) {
    charCodeSumS += s.charCodeAt(i);
    charCodeSumT += t.charCodeAt(i);
  }

  charCodeSumT += t.charCodeAt(t.length - 1);

  return String.fromCharCode(charCodeSumT - charCodeSumS);
}
// @lc code=end
