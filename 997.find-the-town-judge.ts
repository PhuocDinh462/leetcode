/*
 * @lc app=leetcode id=997 lang=typescript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
  if (n === 1 && trust.length === 0) return 1;

  const candidates = new Map<number, number>();
  const trustSet = new Set<number>();

  for (const e of trust) {
    candidates.set(e[1], (candidates.get(e[1]) ?? 0) + 1);
    trustSet.add(e[0]);
  }

  for (const [candidate, numOfTrust] of candidates) {
    if (numOfTrust === n - 1 && !trustSet.has(candidate)) return candidate;
  }

  return -1;
}
// @lc code=end
