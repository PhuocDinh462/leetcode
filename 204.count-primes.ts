/*
 * @lc app=leetcode id=204 lang=typescript
 *
 * [204] Count Primes
 */

// @lc code=start
function countPrimes(n: number): number {
  const sieve = new Array(n).fill(true);
  let prime = Math.max(n - 2, 0);
  const limit = Math.sqrt(n);

  for (let i = 2; i <= limit; i++) {
    if (!sieve[i]) continue;

    for (let j = i * i; j < n; j += i) {
      if (sieve[j]) {
        sieve[j] = false;
        prime--;
      }
    }
  }

  return prime;
}
// @lc code=end
