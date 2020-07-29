/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
  使用额外的二维矩阵
*/
var rotate = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  let copy = JSON.parse(JSON.stringify(matrix)),
    rowLimit = matrix.length,
    colLimit = matrix[0].length;

  for (let col = 0; col < colLimit; col++) {
    for (let row = rowLimit - 1; row >= 0; row--) {
      matrix[col][rowLimit - 1 - row] = copy[row][col];
    }
  }
};