/**
 * @param {character[][]} board
 * @return {number}
 */

/*
  从初始位置向四个方向上去移动，看看能捕获多少个卒
*/
var numRookCaptures = function (board) {
  if (board.length === 0 || board[0].length === 0) return 0;

  let rowLimit = board.length,
    colLimit = board.length,
    row = null,
    col = null,
    count = 0;

  // 找到 R 的位置
  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      if (board[i][j] === 'R') {
        row = i;
        col = j;
        break;
      }
    }
    if (row !== null && col !== null) break;
  }

  let startRow = row;
  while (startRow >= 0) {
    let c = board[startRow][col];
    if (c === 'B') break;
    if (c === 'p') {
      count++;
      break;
    }

    startRow--;
  }

  startRow = row;
  while (startRow < rowLimit) {
    let c = board[startRow][col];
    if (c === 'B') break;
    if (c === 'p') {
      count++;
      break;
    }

    startRow++;
  }

  let startCol = col;
  while (startCol >= 0) {
    let c = board[row][startCol];
    if (c === 'B') break;
    if (c === 'p') {
      count++;
      break;
    }

    startCol--;
  }

  startCol = col;
  while (startCol < colLimit) {
    let c = board[row][startCol];
    if (c === 'B') break;
    if (c === 'p') {
      count++;
      break;
    }

    startCol++;
  }

  return count;
};