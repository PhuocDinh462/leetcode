/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let haveSurplus = false;

  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");

  let result = a.length > b.length ? a.split("") : b.split("");

  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (haveSurplus) {
      if (a[i] == "0" && b[i] == "0") {
        result[i] = "1";
        haveSurplus = false;
      } else if (a[i] == "1" && b[i] == "1") {
        result[i] = "1";
        haveSurplus = true;
      } else {
        result[i] = "0";
        haveSurplus = true;
      }
    } else {
      if (a[i] == "0" && b[i] == "0") continue;
      else if (a[i] == "1" && b[i] == "1") {
        result[i] = "0";
        haveSurplus = true;
      } else result[i] = "1";
    }
  }

  if (haveSurplus)
    for (let i = Math.min(a.length, b.length); i < Math.max(a.length, b.length); i++) {
      if (result[i] == "0") {
        result[i] = "1";
        haveSurplus = false;
        break;
      } else {
        result[i] = "0";
      }
    }

  if (haveSurplus) result.push("1");

  return result.reverse().join("");
}
// @lc code=end
