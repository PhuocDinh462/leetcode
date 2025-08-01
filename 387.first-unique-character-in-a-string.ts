/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const map = new Map<string, number[]>();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) ? [map.get(s[i])![0], map.get(s[i])![1] + 1] : [i, 1]);
  }

  for (const [_, val] of map) {
    if (val[1] === 1) return val[0];
  }

  return -1;
}
// @lc code=end
