/*
 * @lc app=leetcode id=709 lang=typescript
 *
 * [709] To Lower Case
 */

// @lc code=start
function toLowerCase(s: string): string {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) <= "Z".charCodeAt(0) && s[i].charCodeAt(0) >= "A".charCodeAt(0)) {
      res += String.fromCharCode(s[i].charCodeAt(0) + 32);
    } else {
      res += s[i];
    }
  }

  return res;
}
// @lc code=end
