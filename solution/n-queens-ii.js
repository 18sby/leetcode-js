/**
 * @param {number} n
 * @return {number}
 */

/*
  回溯：
  注意：已放置皇后的格子的行、列、对角线都不可放置
  左对角线：x - y = const
  右对角线：x + y = const
  思路：逐行遍历，遍历当前行的每一列
  - 如果合法，就继续遍历下一行
  - 如果不合法，就不要把皇后放在这一列
*/
var totalNQueens = function (n) {
  let ans = 0,
    columns = [],
    leftSkew = [], // x - y = const
    rightSkew = []; // x + y = const

  // 判断当前位置是否可以放置皇后
  function canSet(row, col) {
    return !columns[col] && !leftSkew[col - row] && !rightSkew[col + row];
  }

  // 向当前位置防止一个皇后
  function addQueen(row, col) {
    columns[col] = true;
    leftSkew[col - row] = true;
    rightSkew[col + row] = true;
  }

  // 移除当前位置的皇后
  function removeQueen(row, col) {
    columns[col] = false;
    leftSkew[col - row] = false;
    rightSkew[col + row] = false;
  }

  function backtrack(row, queens) {
    // 判断是否找到一个解
    if (queens === n) {
      ans++;
      return;
    }

    // 遍历
    for (let col = 0; col < n; col++) {
      if (canSet(row, col)) {
        addQueen(row, col);
        backtrack(row + 1, queens + 1);
        removeQueen(row, col);
      }
    }
  };
  backtrack(0, 0);

  return ans;
};