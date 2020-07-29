/**
 * @param {string[]} board
 * @return {boolean}
 */

/*
  看了官方的思路
    1.先遍历，存储‘x’和‘o’的数量
    2.不生效的条件：
      ①.x有胜利条件并且x的数量等于o的数量+1
      ②.o有胜利条件并且x的数量等于o的数量
      ③.x的数量不等于o的数量并且x的数量不等于o的数量+1
    3.以上条件都不符合，那就是有效棋盘
    
    4.需要一个检测传进来的字符串是否有效的函数
*/
var validTicTacToe = function (board) {
  let xCount = 0, oCount = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == 'X') {
        xCount++;
      }
      if (board[i][j] == 'O') {
        oCount++;
      }
    }
  }

  if (win(board, 'X') && xCount !== oCount + 1) return false;
  if (win(board, 'O') && xCount !== oCount) return false;
  if (xCount !== oCount && xCount !== oCount + 1) return false;

  return true;
};

var win = function (board, p) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] == p && board[i][1] == p && board[i][2] == p) {
      return true;
    }
    if (board[0][i] == p && board[1][i] == p && board[2][i] == p) {
      return true;
    }
  }

  if (board[0][0] == p && board[1][1] == p && board[2][2] == p) {
    return true;
  }
  if (board[0][2] == p && board[1][1] == p && board[2][0] == p) {
    return true;
  }

  return false;
}