/*
 * @lc app=leetcode id=859 lang=typescript
 *
 * [859] Buddy Strings
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  let diff = 0;
  const sMap = new Map<string, number>();
  const goalMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff++;
      sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
      goalMap.set(goal[i], (goalMap.get(goal[i]) ?? 0) + 1);
    }
  }

  if (diff === 0) {
    const charSet = new Set<string>();

    for (const c of s) {
      if (charSet.has(c)) return true;
      charSet.add(c);
    }
  } else if (diff === 2) {
    for (const [char, count] of goalMap) {
      if (sMap.has(char) && sMap.get(char) === count) sMap.delete(char);
    }

    if (sMap.size === 0) return true;
  }

  return false;
}
// @lc code=end
