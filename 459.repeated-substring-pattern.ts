/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  console.log((s + s).slice(1, -1));

  if (s.length === 1) return false;

  let patternLength = Math.floor(s.length / 2);

  for (let i = 2; ; i++) {
    patternLength = Math.floor(s.length / i);
    const pattern = s.slice(0, patternLength);
    let isRepeated = true;

    for (let j = 0; j < s.length; j += patternLength) {
      if (s.slice(j, j + patternLength) !== pattern) {
        isRepeated = false;
        break;
      }
    }

    if (isRepeated) return true;

    if (patternLength === 1) return false;
  }
}
// @lc code=end
