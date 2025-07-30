/*
 * @lc app=leetcode id=2723 lang=typescript
 *
 * [2723] Add Two Promises
 */

// @lc code=start
type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  return Promise.all([promise1, promise2]).then((val) => val.reduce((a, b) => a + b));
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
// @lc code=end
