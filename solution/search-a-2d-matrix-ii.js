/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
  参考官方题解四，太巧秒了，充分利用矩阵的特点
  
  从左下角开始搜索
  
  - 如果目标值大于当前值，那么向右搜索，
  - 如果目标值下雨当前值，那么向下搜索，
  
  找到则返回 true，
  如果到越界都没找到，那么返回 true
*/
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  let ans = false,
    rowLimit = matrix.length,
    colLimit = matrix[0].length;

  let row = rowLimit - 1, col = 0;

  while (true) {
    if (row < 0 || col >= colLimit) break;

    let curr = matrix[row][col];

    if (curr === target) {
      ans = true;
      break;
    }

    if (target > curr) col++;
    if (target < curr) row--;
  }

  return ans;
};