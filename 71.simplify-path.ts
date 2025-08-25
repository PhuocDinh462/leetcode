/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
function simplifyPath(path: string): string {
  const parts = path.split("/");
  const res: string[] = [];

  for (const part of parts) {
    if (part === "..") {
      res.pop();
      continue;
    } else if (part === "." || part === "") continue;

    res.push(part);
  }

  return "/" + res.join("/");
}
// @lc code=end
