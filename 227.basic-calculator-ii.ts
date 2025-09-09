/*
 * @lc app=leetcode id=227 lang=typescript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
function calculate(s: string): number {
  s = s.replaceAll(" ", "");

  let groups = s.split(/([+-])/);

  for (let i = 0; i < groups.length; i++) {
    if (groups[i] === "+" || groups[i] === "-") continue;

    let subgroups = groups[i].match(/(\d+|[*/])/g)!;
    let res = +subgroups[0];

    if (subgroups.length > 2) {
      for (let j = 2; j < subgroups.length; j += 2) {
        if (subgroups[j - 1] === "*") res = Math.trunc(res * +subgroups[j]);
        else res = Math.trunc(res / +subgroups[j]);
      }
    }

    groups[i] = res.toString();
  }

  let ans = +groups[0];

  if (groups.length > 2) {
    for (let j = 2; j < groups.length; j += 2) {
      if (groups[j - 1] === "+") ans += +groups[j];
      else ans -= +groups[j];
    }
  }

  return ans;
}
// @lc code=end
