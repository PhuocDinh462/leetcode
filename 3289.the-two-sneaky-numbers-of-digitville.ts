/*
 * @lc app=leetcode id=3289 lang=typescript
 *
 * [3289] The Two Sneaky Numbers of Digitville
 */

// @lc code=start
function getSneakyNumbers(nums: number[]): number[] {
  const set = new Set<number>();
  const res: number[] = [];

  for (const n of nums) {
    if (set.has(n)) {
      res.push(n);
      if (res.length === 2) return res;
    } else set.add(n);
  }

  return res;
}
// @lc code=end
