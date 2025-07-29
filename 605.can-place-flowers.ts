/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (flowerbed.length === 1 && flowerbed[0] === 0) return n <= 1;

  if (n > 0 && flowerbed[0] === 0 && flowerbed[1] === 0) {
    flowerbed[0] = 1;
    n--;
  }

  if (n > 0 && flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
    flowerbed[flowerbed.length - 1] = 1;
    n--;
  }

  if (n === 0) return true;

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      n--;
      if (n === 0) return true;
    }
  }

  return n === 0;
}
// @lc code=end
