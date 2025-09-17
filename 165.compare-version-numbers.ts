/*
 * @lc app=leetcode id=165 lang=typescript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  const arr1 = version1.split(".").map((e) => +e);
  const arr2 = version2.split(".").map((e) => +e);

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    const part1 = arr1[i] ?? 0;
    const part2 = arr2[i] ?? 0;

    if (part1 < part2) return -1;
    else if (part1 > part2) return 1;
  }

  return 0;
}
// @lc code=end
