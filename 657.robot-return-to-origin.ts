/*
 * @lc app=leetcode id=657 lang=typescript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
function judgeCircle(moves: string): boolean {
  let x = 0;
  let y = 0;

  for (const m of moves) {
    switch (m) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "L":
        x--;
        break;
      case "R":
        x++;
        break;
    }
  }

  return x === 0 && y === 0;
}
// @lc code=end
