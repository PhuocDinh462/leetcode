/*
 * @lc app=leetcode id=455 lang=typescript
 *
 * [455] Assign Cookies
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let res = 0;

  for (let i = 0; i < s.length && res < g.length; i++) {
    if (g[res] <= s[i]) res++;
  }

  return res;
}
// @lc code=end
