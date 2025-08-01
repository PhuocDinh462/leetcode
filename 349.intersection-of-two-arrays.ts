/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>(nums1);
  const res = new Set<number>();

  for (const n of nums2) {
    if (set.has(n)) res.add(n);
  }

  return Array.from(res);
}
// @lc code=end
