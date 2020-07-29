/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
  思路：
    遍历两次：
      第一次找到所有0的坐标存到两个数组中
      第二次遍历把与0的坐标重合的点设置为0
*/
var setZeroes = function (matrix) {
  let heng = new Set(),
    zong = new Set();
  let col = matrix.length,
    row = matrix[0].length;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (matrix[i][j] === 0) {
        heng.add(j);
        zong.add(i);
      }
    }
  }

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (heng.has(j) || zong.has(i)) {
        matrix[i][j] = 0;
      }
    }
  }
};