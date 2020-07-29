/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let ans = [], n = queries.length;

  // 构建 p 排列的数组
  let arrp = new Array(m).fill(0).map((v, k) => k + 1);

  for (let i = 0; i < n; i++) {
    let curr = queries[i];
    let index = arrp.indexOf(curr);
    ans.push(index);
    arrp.splice(index, 1);
    arrp.unshift(curr);
  }

  return ans;
};