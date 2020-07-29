/**
 * @param {number[][]} costs
 * @return {number}
 */

/*
  思路：
  1. 假设全部的人都去 A 市，计算总花费 total
  2. 利用一个额外数组计算出所有的人去 A 比去 B 多花的钱，倒序排序
  3. 把多花钱比较多的一半人，让他们去 B，这样就可以省下更多的钱
     在 total 中，把这一半人去 B 比去 A 少花的钱减去，返回结果即可
*/
var twoCitySchedCost = function (costs) {
  let total = costs.reduce((t, p) => t + p[0], 0);
  let diff = [], len = costs.length;
  for (let i = 0; i < len; i++) {
    diff[i] = costs[i][0] - costs[i][1]; // 保存差价
  }
  diff.sort((a, b) => b - a);
  let diffTotal = diff.slice(0, len / 2).reduce((t, p) => t + p, 0)
  return total - diffTotal;
};