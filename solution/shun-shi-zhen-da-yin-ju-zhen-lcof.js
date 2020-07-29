/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
  思路：模拟一个人转圈走路
  走完上：start_y++
  走完右：limit_x--
  走完下：limit_y--
  走完左：start_x++
  [1,2,3]
  [4,5,6]
  [7,8,9]
*/
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  let start_x = 0,
    start_y = 0,
    limit_y = matrix.length,
    limit_x = matrix[0].length,
    ans = [],
    direct = 'top';

  let directions = {
    top: function () {
      for (let i = start_x; i < limit_x; i++) {
        ans.push(matrix[start_y][i]);
      }
      direct = 'right';
      start_y++;
    },
    right: function () {
      for (let i = start_y; i < limit_y; i++) {
        ans.push(matrix[i][limit_x - 1]);
      }
      direct = 'bottom';
      limit_x--;
    },
    bottom: function () {
      for (let i = limit_x - 1; i >= start_x; i--) {
        ans.push(matrix[limit_y - 1][i]);
      }
      direct = 'left';
      limit_y--;
    },
    left: function () {
      for (let i = limit_y - 1; i >= start_y; i--) {
        ans.push(matrix[i][start_x]);
      }
      direct = 'top';
      start_x++;
    }
  }

  while (ans.length < matrix.length * matrix[0].length) {
    directions[direct]();
  }

  return ans;
};