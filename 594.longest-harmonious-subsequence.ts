/*
 * @lc app=leetcode id=594 lang=typescript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
function findLHS(nums: number[]): number {
  let groups = new Map<number, number>();
  let result = 0;

  for (const num of nums) {
    if (!groups.has(num)) {
      groups.set(num, 1);
    } else {
      groups.set(num, (groups.get(num) ?? 0) + 1);
    }
  }

  groups = new Map([...groups.entries()].sort((a, b) => a[0] - b[0]));

  const keys = Array.from(groups.keys());
  const vals = Array.from(groups.values());

  for (let i = 0; i < groups.size - 1; i++) {
    if (Math.abs(keys[i + 1] - keys[i]) == 1 && vals[i + 1] + vals[i] > result) {
      result = vals[i] + vals[i + 1];
    }
  }

  return result;
}
// @lc code=end
