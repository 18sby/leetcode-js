/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
/*
  鬼题目
*/
var findSolution = function (customfunction, z) {
  let ans = [];

  for (let i = 1; i <= z; i++) {
    for (let j = 1; j <= z; j++) {
      if (customfunction.f(i, j) === z) {
        ans.push([i, j]);
      }
    }
  }

  return ans;
};