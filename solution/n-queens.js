/**
 * @param {number} n
 * @return {string[][]}
 */

/*
 参考作者 user3026的思路：
  1.用三个数组来判断，当前遍历的位置是否可以放置皇后
  2.一个新增判断的方法，一个删除判断的方法，一个进行判断的方法
  3.回溯的参数只需一个“列”数，在回溯的方法中进行“行”的遍历列数
  4.因为回溯过程是先行后列，所以不需要判断行内是否有重复
*/
var solveNQueens = function (n) {
  let result = [],
    lob_list = [], // 左斜线 row + col
    rob_list = [], // 右斜线 row - col
    col_list = [], // 列
    queens = [];
  var addTrap = function (row, col) {
    queens.push(col);
    lob_list[row + col] = true;
    rob_list[row - col] = true;
    col_list[col] = true;
  };
  var removeTrap = function (row, col) {
    queens.pop();
    lob_list[row + col] = false;
    rob_list[row - col] = false;
    col_list[col] = false;
  };
  var canSet = function (row, col) {
    return !lob_list[row + col] && !rob_list[row - col] && !col_list[col];
  };
  var solveQueens = function () {
    var answer = [];
    for (let i = 0; i < n; i++) {
      let quarter = queens[i], tp = '';
      for (let j = 0; j < quarter; j++) {
        tp += '.';
      }
      tp += 'Q';
      for (let j = 0; j < n - 1 - quarter; j++) {
        tp += '.';
      }
      answer.push(tp);
    }
    result.push(answer);
  };
  var backtrack = function (row) {
    for (let col = 0; col < n; col++) {
      if (canSet(row, col)) {
        addTrap(row, col);
        if (row + 1 === n) {
          solveQueens();
        }
        else {
          backtrack(row + 1);
        }
        removeTrap(row, col);
      }
    }
  };
  backtrack(0);
  return result;
};