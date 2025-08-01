/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  let res = "";

  for (let i = 0; i <= Math.floor(s.length / k); i++) {
    if (i % 2 === 0) {
      res += s
        .slice(i * k, (i + 1) * k)
        .split("")
        .reverse()
        .join("");
    } else {
      res += s.slice(i * k, (i + 1) * k);
    }
  }

  return res;
}
// @lc code=end
