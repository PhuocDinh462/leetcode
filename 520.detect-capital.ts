/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  const lowerCase = word.toLowerCase();

  return (
    word === lowerCase ||
    word === word.toUpperCase() ||
    word === lowerCase[0].toUpperCase() + lowerCase.slice(1)
  );
}
// @lc code=end
