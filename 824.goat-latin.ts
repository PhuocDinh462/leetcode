/*
 * @lc app=leetcode id=824 lang=typescript
 *
 * [824] Goat Latin
 */

// @lc code=start
function toGoatLatin(sentence: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const words = sentence.split(" ");
  const res: string[] = [];

  words.forEach((w, i) => {
    if (vowels.has(w[0])) {
      res.push(w + "ma" + "a".repeat(i + 1));
    } else {
      res.push(w.substring(1) + w[0] + "ma" + "a".repeat(i + 1));
    }
  });

  return res.join(" ");
}
// @lc code=end
