/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let buy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) buy = prices[i];
    else if (profit < prices[i] - buy) profit = prices[i] - buy;
  }

  return profit;
}
// @lc code=end
