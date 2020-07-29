/**
 * @param {string} path
 * @return {boolean}
 */

/*
  利用一个二维矩阵去重
*/
var isPathCrossing = function (path) {
  let matrix = [], len = path.length, row = 0, col = 0;
  matrix[0] = [1]; // 初始化 [0, 0] 点

  for (let i = 0; i < len; i++) {
    switch (path[i]) {
      case 'N':
        col--;
        break;
      case 'S':
        col++;
        break;
      case 'E':
        row++;
        break;
      case 'W':
        row--;
        break;
    }
    if (matrix[row] === undefined) {
      matrix[row] = [];
    }
    if (matrix[row][col] === undefined) {
      matrix[row][col] = 1; // 记录走过此点
    } else {
      return true;
    }
  }

  return false;
};