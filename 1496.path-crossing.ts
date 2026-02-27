/*
 * @lc app=leetcode id=1496 lang=typescript
 *
 * [1496] Path Crossing
 */

// @lc code=start
function isPathCrossing(path: string): boolean {
  let current = "0,0";
  const history = new Set<string>([current]);

  for (let i = 0; i < path.length; i++) {
    const paths = current.split(",");
    const x = +paths[0];
    const y = +paths[1];

    switch (path[i]) {
      case "N":
        current = `${x + 1},${y}`;
        if (history.has(current)) return true;
        history.add(current);
        break;
      case "S":
        current = `${x - 1},${y}`;
        if (history.has(current)) return true;
        history.add(current);
        break;
      case "E":
        current = `${x},${y + 1}`;
        if (history.has(current)) return true;
        history.add(current);
        break;
      default:
        current = `${x},${y - 1}`;
        if (history.has(current)) return true;
        history.add(current);
    }
  }

  return false;
}
// @lc code=end
