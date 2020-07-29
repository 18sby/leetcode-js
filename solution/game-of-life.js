/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/*
  使用了额外空间
  对 copy 出来的 newBoard 遍历一次，每次统计它周围的八个细胞状态，
  更新 board 中细胞的状态
*/
var gameOfLife = function (board) {
  if (board.length === 0 || board[0].length === 0) return null;
  let rowLimit = board.length,
    colLimit = board[0].length,
    newBoard = JSON.parse(JSON.stringify(board));

  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      let c = newBoard[i][j];
      let ways = [
        [-1, -1], [-1, 0], [-1, 1], [0, 1],
        [1, 1], [1, 0], [1, -1], [0, -1]
      ], count = 0;

      for (let way of ways) {
        let next_row = i + way[0],
          next_col = j + way[1];
        if (next_row < 0 || next_row >= rowLimit || next_col < 0 ||
          next_col >= colLimit) {
          continue;
        }
        if (newBoard[next_row][next_col] == 1) count++;
      }

      if (c == 1 && (count < 2 || count > 3)) {
        board[i][j] = '0';
      } else {
        if (c == 0 && count === 3) {
          board[i][j] = '1';
        }
      }
    }
  }
};