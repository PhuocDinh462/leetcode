/*
 * @lc app=leetcode id=2418 lang=typescript
 *
 * [2418] Sort the People
 */

// @lc code=start
function sortPeople(names: string[], heights: number[]): string[] {
  return names
    .map((val, index) => [val, heights[index]] as [string, number])
    .sort((a, b) => b[1] - a[1])
    .map((val) => val[0]);
}
// @lc code=end
