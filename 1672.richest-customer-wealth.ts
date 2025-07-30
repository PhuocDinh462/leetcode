/*
 * @lc app=leetcode id=1672 lang=typescript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
function maximumWealth(accounts: number[][]): number {
  return accounts
    .sort((a, b) => b.reduce((p, c) => p + c) - a.reduce((p, c) => p + c))[0]
    .reduce((p, c) => p + c);
}
// @lc code=end
