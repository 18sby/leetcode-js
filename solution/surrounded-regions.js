/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/*
  DFS + 递归
  思路：
  1.遍历四条边，遇到 'O' ，从它开始，进行 dfs，把所有与它联通的点标记为 '#'
  2.遍历一遍矩阵，把所有 'O' 变为 'X' ，所有 '#' 变为 'O'
*/
var solve = function (board) {
  if (board.length === 0) return;
  let rowLimit = board.length,
    colLimit = board[0].length;

  function dfs(row, col) {
    // 将当前位置标记为 '#'
    board[row][col] = '#';

    // 遍历四条边(终止条件：1.越界 2.邻接方格没有 'O' 了)
    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let i = 0; i < 4; i++) {
      let r = row + ways[i][0],
        c = col + ways[i][1];
      if (r < 0 || r >= rowLimit || c < 0 || c >= colLimit || board[r][c] !== 'O') continue;
      dfs(r, c);
    }
  };
  // 上下两条边
  for (let i = 0; i < colLimit; i++) {
    if (board[0][i] === 'O') dfs(0, i);
    if (board[rowLimit - 1][i] === 'O') dfs(rowLimit - 1, i);
  }
  // 左右两条边
  for (let j = 0; j < rowLimit; j++) {
    if (board[j][0] === 'O') dfs(j, 0);
    if (board[j][colLimit - 1] === 'O') dfs(j, colLimit - 1);
  }

  // 遍历一次矩阵
  // 将'#' -> 'O'  将'O' -> 'X'
  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
      else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
};