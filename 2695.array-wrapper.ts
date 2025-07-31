/*
 * @lc app=leetcode id=2695 lang=typescript
 *
 * [2695] Array Wrapper
 */

// @lc code=start
class ArrayWrapper {
  private nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    return this.nums.reduce((a, b) => a + b, 0);
  }

  toString(): string {
    return "[" + this.nums.join(",") + "]";
  }
}
// @lc code=end
