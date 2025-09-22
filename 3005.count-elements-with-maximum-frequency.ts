/*
 * @lc app=leetcode id=3005 lang=typescript
 *
 * [3005] Count Elements With Maximum Frequency
 */

// @lc code=start
function maxFrequencyElements(nums: number[]): number {
  const numMap = new Map<number, number>();

  for (const n of nums) {
    numMap.set(n, (numMap.get(n) ?? 0) + 1);
  }

  const values = Array.from(numMap.values());
  const max = Math.max(...values);

  return values.filter((e) => e === max).reduce((a, b) => a + b);
}
// @lc code=end
