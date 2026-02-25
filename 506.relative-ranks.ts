/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const map: number[][] = [];

  score.forEach((val, i) => {
    map.push([val, i]);
  });

  map.sort((a, b) => b[0] - a[0]);

  const res = score.map((val) => val.toString());

  for (let i = 0; i < map.length; i++) {
    if (i === 0) res[map[i][1]] = "Gold Medal";
    else if (i === 1) res[map[i][1]] = "Silver Medal";
    else if (i === 2) res[map[i][1]] = "Bronze Medal";
    else res[map[i][1]] = (i + 1).toString();
  }

  return res;
}
// @lc code=end
