/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  let ans = [[1], [1, 1]];
  for (let i = 3; i <= numRows; i++) {
    let temp = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        temp.push(1);
      } else {
        temp.push(ans[i - 2][j - 1] + ans[i - 2][j]);
      }
    }
    ans.push([...temp]);
  }

  return ans;
};