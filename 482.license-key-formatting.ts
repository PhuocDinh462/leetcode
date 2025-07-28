/*
 * @lc app=leetcode id=482 lang=typescript
 *
 * [482] License Key Formatting
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
  s = s.replaceAll("-", "").toUpperCase();
  const res: string[] = [];

  if (s.length % k !== 0) {
    res.push(s.slice(0, s.length % k));
  }

  for (let i = s.length % k; i <= s.length - k; i += k) {
    res.push(s.slice(i, i + k));
  }

  return res.join("-");
}
// @lc code=end
