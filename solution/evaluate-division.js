/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

/*
  dfs
  把已知条件构建为有向图，dfs 搜索每一条路径
  注意：已访问过的点就不要再访问了，不然会造成死循环
*/
var calcEquation = function (equations, values, queries) {
  let ans = [],
    elen = equations.length,
    vlen = values.length,
    qlen = queries.length,
    matrix = [], // 矩阵
    map = {}; // 判断 queries 中的点是否存在于已知的图中

  // 创建有向图
  for (let i = 0; i < elen; i++) {
    let [start, end] = equations[i],
      val = values[i];

    if (matrix[start] === undefined) matrix[start] = [];
    if (matrix[end] === undefined) matrix[end] = [];

    matrix[start][end] = val;
    matrix[end][start] = 1 / val;

    if (map[start] === undefined) map[start] = 1;
    if (map[end] === undefined) map[end] = 1;
  }

  for (let i = 0; i < qlen; i++) {
    let [start, end] = queries[i];
    if (map[start] === undefined || map[end] === undefined) {
      ans.push(-1.0);
      continue;
    }
    ans.push(dfs(start, end, []));
  }

  // 搜索 A 到 B 的路径
  function dfs(A, B, visited) {
    if (A === B) return 1.0;

    visited[A] = 1

    let neighbors = matrix[A];

    let target = null;

    for (let key in neighbors) {
      let val = neighbors[key];
      if (visited[key] !== undefined) {
        continue;
      }

      let d = dfs(key, B, visited);

      if (d > 0) {
        target = d * matrix[A][key];
        break;
      }
    }

    return target || -1.0;
  }

  return ans;
}