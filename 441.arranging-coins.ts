/*
 * @lc app=leetcode id=441 lang=typescript
 *
 * [441] Arranging Coins
 */

// @lc code=start
function arrangeCoins(n: number): number {
  let res = 0;

  for (let i = 1; n - i >= 0; n -= i, i++) res++;

  return res;
}
// @lc code=end
