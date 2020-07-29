/**
 * @param {number[]} A
 * @return {number[]}
 */

/*
  一行代码：
  1. 把每个元素变成绝对值
  2. 从小到大排序
  3. 对每个元素求平方
*/
var sortedSquares = function (A) {
  return A.map(item => Math.abs(item)).sort((a, b) => a - b).map(item => item * item);
};