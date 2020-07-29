/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

/*
  题意是：只染色与原始点相同颜色的点
  dfs 或者 bfs 都可以，用一个数组记录已访问过
*/
var floodFill = function (image, sr, sc, newColor) {
  if (image.length === 0 || image[0].length === 0) return [];

  let rowLimit = image.length,
    colLimit = image[0].length,
    visited = [],
    origin = image[sr][sc];

  for (let i = 0; i < rowLimit; i++) {
    visited[i] = new Array(colLimit).fill(false);
  }

  function dfs(row, col) {
    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    if (image[row][col] !== newColor) return;

    for (let way of ways) {
      let next_row = row + way[0],
        next_col = col + way[1];

      if (
        next_row < 0 || next_row >= rowLimit ||
        next_col < 0 || next_col >= colLimit ||
        visited[next_row][next_col] === true
      ) {
        continue;
      }

      if (image[next_row][next_col] !== origin) {
        visited[next_row][next_col] = true;
        continue;
      }

      image[next_row][next_col] = newColor;
      visited[next_row][next_col] = true;
      dfs(next_row, next_col);
    }
  }

  image[sr][sc] = newColor;
  visited[sr][sc] = true;
  dfs(sr, sc);

  return image;
};