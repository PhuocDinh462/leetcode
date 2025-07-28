/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
  const sArr = s.split(" ");
  const res: string[] = [];

  for (const word of sArr) {
    res.push(word.split("").reverse().join(""));
  }

  return res.join(" ");
}
// @lc code=end
