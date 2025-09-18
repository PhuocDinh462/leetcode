/*
 * @lc app=leetcode id=852 lang=typescript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {
  let l = 0;
  let r = arr.length - 1;

  while (true) {
    const m = Math.trunc((l + r) / 2);

    if (arr[m] > (arr[m - 1] ?? -Infinity) && arr[m] > (arr[m + 1] ?? -Infinity)) return m;
    else if (arr[m] < arr[m + 1]) l = m + 1;
    else r = m;
  }
}
// @lc code=end
