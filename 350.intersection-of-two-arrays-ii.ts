/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const res = new Array<number>();

  for (const n of nums2) {
    const index = nums1.indexOf(n);

    if (index !== -1) {
      res.push(n);
      nums1.splice(index, 1);
    }
  }

  return res;
}
// @lc code=end
