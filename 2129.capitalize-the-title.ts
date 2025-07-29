/*
 * @lc app=leetcode id=2129 lang=typescript
 *
 * [2129] Capitalize the Title
 */

// @lc code=start
function capitalizeTitle(title: string): string {
  const words = title.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 2) words[i] = words[i][0].toUpperCase() + words[i].toLowerCase().slice(1);
    else words[i] = words[i].toLowerCase();
  }

  return words.join(" ");
}
// @lc code=end
