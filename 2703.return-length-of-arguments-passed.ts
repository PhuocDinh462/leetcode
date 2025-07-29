/*
 * @lc app=leetcode id=2703 lang=typescript
 *
 * [2703] Return Length of Arguments Passed
 */

// @lc code=start
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */
// @lc code=end
