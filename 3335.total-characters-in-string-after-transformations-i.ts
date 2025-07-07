function lengthAfterTransformations(s: string, t: number): number {
  const MOD = 1000000007;
  let cnt = Array(26).fill(0);

  for (let char of s) {
    cnt[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  console.log(cnt);

  for (let j = 0; j < t; j++) {
    let tmp = Array(26).fill(0);
    for (let i = 0; i < 26; i++) {
      if (i === 25) {
        tmp[0] = (tmp[0] + cnt[i]) % MOD;
        tmp[1] = (tmp[1] + cnt[i]) % MOD;
      } else {
        tmp[i + 1] = (tmp[i + 1] + cnt[i]) % MOD;
      }
    }
    cnt = tmp;

    console.log(cnt);
  }

  return cnt.reduce((sum, val) => (sum + val) % MOD, 0);
}
