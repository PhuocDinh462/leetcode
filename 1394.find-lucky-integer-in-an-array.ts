/*
 * @lc app=leetcode id=1394 lang=typescript
 *
 * [1394] Find Lucky Integer in an Array
 */

// @lc code=start
function findLucky(arr: number[]): number {
  const numMap = new Map<number, number>();

  for (const n of arr) {
    if (numMap.has(n)) numMap.set(n, numMap.get(n)! + 1);
    else numMap.set(n, 1);
  }

  numMap.forEach((value, key) => {
    if (value !== key) numMap.delete(key);
  });

  return Array.from(numMap.keys()).sort((a, b) => b - a)[0] ?? -1;
}
// @lc code=end
