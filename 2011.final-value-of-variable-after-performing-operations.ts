/*
 * @lc app=leetcode id=2011 lang=typescript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
  let res = 0;

  for (const e of operations) {
    if (e.includes("+")) res++;
    else res--;
  }

  return res;
}
// @lc code=end
