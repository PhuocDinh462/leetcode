/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  const vowelIndexArr: number[] = [];
  const sArr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowelSet.has(s[i].toLowerCase())) vowelIndexArr.push(i);
  }

  for (let i = 0; i < Math.floor(vowelIndexArr.length / 2); i++) {
    const tmp = sArr[vowelIndexArr[i]];
    sArr[vowelIndexArr[i]] = sArr[vowelIndexArr[vowelIndexArr.length - 1 - i]];
    sArr[vowelIndexArr[vowelIndexArr.length - 1 - i]] = tmp;
  }

  return sArr.join("");
}
// @lc code=end
