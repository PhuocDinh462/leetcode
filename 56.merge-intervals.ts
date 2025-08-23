/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  const res: number[][] = [];

  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  for (let i = 0; i < intervals.length; i++) {
    const start = intervals[i][0];
    let end = intervals[i][1];

    if (start < 0) continue;

    if (i > 0 && res.length > 1 && end < res[res.length - 1][1]) break;

    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[j][0] <= end && intervals[j][1] >= end) {
        end = intervals[j][1];
        i = j;
      } else if (intervals[j][0] > end) {
        break;
      } else {
        // Assign with a negative value to ignore this element
        intervals[j][0] *= -1;
      }
    }

    res.push([start, end]);
  }

  return res;
}
