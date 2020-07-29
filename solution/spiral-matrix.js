/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 好感动，终于写出来一个自己的思路，而且效率还不错
/*
  模拟一个人走路，走到边界转向，直到走过的路的长度足够，最终返回走过的路
    先处理边界条件
    
    设定四个方向的走法：x++, y++, x--, y--
    
    每个方向的界限值，是在走完一条边之后变化的(
      每次走完top：start_y + 1
      每次走完right：limit_x - 1
      每次走完bottom：limit_y - 1
      每次走完left：start_x + 1
    )
    递归：
      终止条件：result.length === total
      遍历方向：[ 'top', 'right', 'bottom', 'left' ]
    循环：
      把循环每条边的过程，以及循环过后的状态值改变，分别放到四个函数中
*/
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  if (matrix.length === 1) return matrix[0];

  var total = matrix.length * matrix[0].length,
    result = [],
    limit_x = matrix[0].length,
    limit_y = matrix.length,
    start_x = 0,
    start_y = 0,
    direction = 'top';
  var changeDirection = {
    top: function () {
      direction = 'right';
      let temp = [];
      for (let i = start_x; i < limit_x; i++) {
        temp.push(matrix[start_y][i]);
      }
      result = result.concat(temp);
      start_y++;
    },
    right: function () {
      direction = 'bottom';
      let temp = [];
      for (let i = start_y; i < limit_y; i++) {
        temp.push(matrix[i][limit_x - 1])
      }
      result = result.concat(temp);
      limit_x--;
    },
    bottom: function () {
      direction = 'left';
      let temp = [];
      for (let i = start_x; i < limit_x; i++) {
        temp.unshift(matrix[limit_y - 1][i]);
      }
      result = result.concat(temp);
      limit_y--;
    },
    left: function () {
      direction = 'top';
      let temp = [];
      for (let i = start_y; i < limit_y; i++) {
        temp.unshift(matrix[i][start_x])
      }
      result = result.concat(temp);
      start_x++;
    }
  };
  var backtrack = function () {
    if (result.length === total) {
      return;
    }
    else {
      changeDirection[direction]();
      backtrack();
    }
  }
  backtrack();
  return result;
};