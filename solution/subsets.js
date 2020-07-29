/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 回溯法 */
var subsets = function (nums) {
  let result = [],
    map = {};

  var backtrack = function (mat, temp) {
    if (map[temp] === undefined) {
      result.push(JSON.parse(JSON.stringify(temp)));
      map[temp] = 1;
    }

    for (let i in mat) {
      temp.push(mat[i]);
      backtrack(mat.slice(i + 1), temp);
      temp.pop();
      backtrack(mat.slice(i + 1), temp);
    }

  }

  backtrack(nums, []);

  return result;
};

/* 遍历法 */
var subsets = function (nums) {
  let result = [[]];
  for (let num of nums) {
    for (let i = 0, len = result.length; i < len; i++) {
      result.push(result[i].concat([num]));
    }
  }
  return result;
}