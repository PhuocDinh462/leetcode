/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  let sumHistorySet: Set<Number> = new Set<Number>();
  let sum = 0;

  while (true) {
    for (; n > 0; sum += Math.pow(n % 10, 2), n = Math.floor(n / 10));

    if (sum === 1) return true;
    else if (sumHistorySet.has(sum)) return false;

    sumHistorySet.add(sum);
    n = sum;
    sum = 0;
  }
}
// @lc code=end
