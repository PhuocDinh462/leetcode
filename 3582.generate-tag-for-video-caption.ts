/*
 * @lc app=leetcode id=3582 lang=typescript
 *
 * [3582] Generate Tag for Video Caption
 */

// @lc code=start
function generateTag(caption: string): string {
  const words = caption.trim().toLowerCase().split(" ");

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return `#${words.join("").slice(0, 99)}`;
}
// @lc code=end
