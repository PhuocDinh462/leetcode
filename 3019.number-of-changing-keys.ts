/*
 * @lc app=leetcode id=3019 lang=typescript
 *
 * [3019] Number of Changing Keys
 */

// @lc code=start
function countKeyChanges(s: string): number {
  if (s.length === 1) return 0;

  let res = 0;

  s = s.toLowerCase();

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) res++;
  }

  return res;
}
// @lc code=end
