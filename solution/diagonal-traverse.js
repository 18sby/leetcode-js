/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
  1.边界处理
  2.找规律：边界是 m - 1 和 n - 1
  3.每一行的元素坐标之和等于行数，从第 0 行开始
  4.每一行都是 x++，y-- 或者 x--，y++
  5.如果是 x 最大开始，开始的值分配给 x 最大，超出的配额分配给 y，反之，相反处理，使用一个标记『flag』，
    第 0 行是从分配给 x 最大开始
  6.那么第『5』步每次停止循环都是 x 为 0，或者 y 超出界限
*/

var findDiagonalOrder = function (matrix) {
  let m = matrix.length;
  if (m === 0) return matrix;

  let n = matrix[0].length;
  if (n === 0) return matrix;

  let flag = true, ans = [];
  for (let i = 0; i < m + n - 1; i++) {
    if (flag) {
      let x = i < m ? i : m - 1,
        y = i - x;

      while (x >= 0 && y < n) {
        ans.push(matrix[x][y]);
        x--;
        y++;
      }
    }
    else {
      let y = i < n ? i : n - 1,
        x = i - y;

      while (y >= 0 && x < m) {
        ans.push(matrix[x][y]);
        y--;
        x++;
      }
    }

    flag = !flag;
  }

  return ans;
};