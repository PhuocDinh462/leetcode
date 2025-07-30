/*
 * @lc app=leetcode id=2942 lang=typescript
 *
 * [2942] Find Words Containing Character
 */

// @lc code=start
function findWordsContaining(words: string[], x: string): number[] {
  const res: number[] = [];

  words.forEach((value, index) => {
    if (value.includes(x)) res.push(index);
  });

  return res;
}
// @lc code=end
