/*
 * @lc app=leetcode id=434 lang=typescript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
function countSegments(s: string): number {
  s = s.trim().replace(/\s+/g, " ");

  if (s.length === 0) return 0;

  return s.split(" ").length;
}
// @lc code=end
