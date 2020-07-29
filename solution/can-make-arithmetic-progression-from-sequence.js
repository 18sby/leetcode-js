/**
 * @param {number[]} arr
 * @return {boolean}
 */

/*
  1. 先排序，正序或者倒序都可以
  2. 逐个判断公差是否相等
*/
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let minus = arr[1] - arr[0], len = arr.length;

  for (let i = 2; i < len; i++) {
    if (arr[i] - arr[i - 1] !== minus) return false;
  }

  return true;
};