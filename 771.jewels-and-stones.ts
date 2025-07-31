/*
 * @lc app=leetcode id=771 lang=typescript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
  let res = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) res++;
  }

  return res;
}
// @lc code=end
