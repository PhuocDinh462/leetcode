/*
 * @lc app=leetcode id=1512 lang=typescript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
  const map = new Map<number, number>();
  let res = 0;

  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  map.forEach((val) => {
    res += (val * (val - 1)) / 2;
  });

  return res;
}
// @lc code=end
