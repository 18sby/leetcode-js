/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  DFS，访问过的点标记为 0，就不再访问了
*/
var maxAreaOfIsland = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let row = grid.length, col = grid[0].length, max = 0,
    count = 0;

  function dfs(x, y) {
    if (grid[x][y] === 1) {
      grid[x][y] = 0;
      count += 1;
    }

    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let way of ways) {
      let next_x = x + way[0],
        next_y = y + way[1];
      if (next_x < 0 || next_x >= row || next_y < 0 || next_y >= col) {
        continue;
      }
      if (grid[next_x][next_y] === 0) continue;
      if (grid[next_x][next_y] === 1) {
        dfs(next_x, next_y);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        count = 0;
        dfs(i, j);
        max = Math.max(max, count);
      }
    }
  }

  return max;
};

/*
  104ms
  BFS：遍历矩阵，从左右为1的位置向四个方向进行bfs，找到连通的最大岛屿并返回
*/
var maxAreaOfIsland = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let row = grid.length, col = grid[0].length, max = 0,
    queue = [], count = 0, visited = [];

  for (let i = 0; i < row; i++) {
    visited[i] = [];
    for (let j = 0; j < col; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {

        queue = [[i, j]];
        visited[i][j] = true;
        count = 0;

        while (queue.length > 0) {
          let offer = queue.shift();
          let [x, y] = offer;
          if (grid[x][y] === 1) count += 1;

          let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
          for (let way of ways) {
            let next_x = x + way[0],
              next_y = y + way[1];
            if (next_x < 0 || next_x >= row || next_y < 0 || next_y >= col) {
              continue;
            }
            if (visited[next_x][next_y] === true) continue;
            if (grid[next_x][next_y] === 1) {
              queue.push([next_x, next_y]);
              visited[next_x][next_y] = true;
            }
          }
        }

        max = Math.max(max, count);

      }
    }
  }

  return max;
};