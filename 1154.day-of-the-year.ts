/*
 * @lc app=leetcode id=1154 lang=typescript
 *
 * [1154] Day of the Year
 */

// @lc code=start
function dayOfYear(date: string): number {
  const dateConverted = new Date(date);
  const startOfYear = new Date(dateConverted.getFullYear(), 0, 1);
  return Math.floor((dateConverted.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}
// @lc code=end
