/*
 * @lc app=leetcode id=414 lang=typescript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
function thirdMax(nums: number[]): number {
  const set = new Set(nums);

  for (let i = 0; i < 2; i++) {
    set.delete(Math.max(...set));
    if (set.size === 0) return Math.max(...nums);
  }

  return Math.max(...set);
}
// @lc code=end
