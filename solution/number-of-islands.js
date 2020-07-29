/**
 * @param {character[][]} grid
 * @return {number}
 */

/*
  从每一个是陆地的网格向四周进行 dfs，直到遇到边界停止，记为一个岛屿
  标记一下遍历过的陆地就不要再次遍历了，否则会造成重复(把遍历过的陆地标记为0就好了)
*/
var numIslands = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let rowLimit = grid.length,
    colLimit = grid[0].length;

  function dfs(row, col) {
    if (grid[row][col] === 0) return;

    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let way of ways) {
      let next_row = row + way[0],
        next_col = col + way[1];

      if (
        next_row < 0 || next_row >= rowLimit ||
        next_col < 0 || next_col >= colLimit ||
        grid[next_row][next_col] === '0'
      ) {
        continue;
      }

      grid[next_row][next_col] = '0';
      dfs(next_row, next_col);
    }
  }

  let count = 0;
  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      if (grid[i][j] === '0') continue;
      grid[i][j] = '0';
      dfs(i, j);
      count++;
    }
  }

  return count;
};