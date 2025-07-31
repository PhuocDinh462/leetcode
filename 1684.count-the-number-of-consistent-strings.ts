/*
 * @lc app=leetcode id=1684 lang=typescript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
function countConsistentStrings(allowed: string, words: string[]): number {
  const allowedSet = new Set(allowed);
  let res = 0;

  for (const w of words) {
    let isIncluded = true;

    for (let i = 0; i < w.length; i++) {
      if (!allowedSet.has(w[i])) {
        isIncluded = false;
        break;
      }
    }

    if (isIncluded) res++;
  }

  return res;
}
// @lc code=end
