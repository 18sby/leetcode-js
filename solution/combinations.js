/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/* 回溯算法 */
var combine = function (n, k) {
  let result = [];

  var backtrack = function (num, temp) {
    if (temp.length === k) {
      result.push(JSON.parse(JSON.stringify(temp)));
      return;
    }
    for (let i = num; i <= n; i++) {
      temp.push(i);
      backtrack(i + 1, temp);
      temp.pop();
    }
  }
  backtrack(1, []);
  return result;
};