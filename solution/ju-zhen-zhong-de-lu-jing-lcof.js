/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
  dfs，搜索到一个结果返回即可
  dfs(下一个要搜索的word中字符的索引，当前搜索的横坐标，当前搜索的纵坐标)
*/
var exist = function (board, word) {
  if (board.length === 0 || board[0].length === 0) return false;

  let ans = false,
    rowLimit = board.length,
    colLimit = board[0].length,
    len = word.length;

  let visited = new Array(rowLimit).fill(1).map(() => new Array(colLimit).fill(false));

  function dfs(index, row, col) {
    if (index === len) {
      ans = true;
      return;
    }

    if (ans === true) return;

    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let way of ways) {
      let next_row = row + way[0],
        next_col = col + way[1];

      if (
        next_row < 0 || next_row >= rowLimit ||
        next_col < 0 || next_col >= colLimit ||
        visited[next_row][next_col] === true
      ) continue;

      if (board[next_row][next_col] === word.charAt(index)) {
        visited[next_row][next_col] = true;
        dfs(index + 1, next_row, next_col);
        visited[next_row][next_col] = false;
      }
    }
  }

  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      if (ans === true) return true;

      if (board[i][j] === word.charAt(0)) {
        visited[i][j] = true;
        dfs(1, i, j);
        visited[i][j] = false;
      }
    }
  }

  return ans;
};