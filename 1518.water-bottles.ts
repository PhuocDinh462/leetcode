/*
 * @lc app=leetcode id=1518 lang=typescript
 *
 * [1518] Water Bottles
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
  let res = 0;

  for (let emptyBottles = 0; numBottles > 0; ) {
    // Drink
    res += numBottles;
    emptyBottles += numBottles;

    // Exchange
    numBottles = Math.floor(emptyBottles / numExchange);
    emptyBottles -= numBottles * numExchange;
  }

  return res;
}
// @lc code=end
