/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteArr = ransomNote.split("");
  const magazineArr = magazine.split("");

  for (let c of ransomNoteArr) {
    const index = magazineArr.findIndex((char) => char === c);
    if (index === -1) return false;
    else magazineArr.splice(index, 1);
  }

  return true;
}
// @lc code=end
