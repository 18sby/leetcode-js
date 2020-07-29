/**
 * @param {number[][]} grid
 * @return {boolean}
 */

// 沿着管道一次搜索就可以了
// 走过的格子不可重复访问，要标记一下，防止出现环，出现死循环
var hasValidPath = function (grid) {
  let canWays = [null, [[], [1, 3, 5], [], [1, 4, 6]], [[2, 3, 4], [], [2, 5, 6], []], [[], [], [5, 6, 2], [1, 4, 6]], [[], [1, 3, 5], [2, 5, 6], []], [[2, 3, 4], [], [], [1, 4, 6]], [[2, 3, 4], [1, 3, 5], [], []]];

  if (grid.length === 0 || grid[0].length === 0) return false;
  if (grid.length === 1 && grid[0].length === 1) return true;

  let rowLimit = grid.length,
    colLimit = grid[0].length,
    visited = [];

  for (let i = 0; i < rowLimit; i++) {
    visited[i] = [];
    for (let j = 0; j < colLimit; j++) {
      visited[i][j] = true;
    }
  }

  let ans = false;
  visited[0][0] = false;
  let queue = [[0, 0]];

  while (queue.length > 0) {
    let [row, col] = queue.shift();
    if (row === rowLimit - 1 && col === colLimit - 1) {
      ans = true;
      break;
    }

    let currVal = grid[row][col];
    let canWay = canWays[currVal];

    let directs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let key = 0; key < directs.length; key++) {
      let direct = directs[key];
      let next_row = row + direct[0],
        next_col = col + direct[1];

      // 判断是否越界
      if (next_row < 0 || next_row >= rowLimit || next_col < 0 || next_col >= colLimit) continue;
      if (canWay[key].length === 0) continue;
      if (visited[next_row][next_col] === false) continue;

      let nextVal = grid[next_row][next_col];
      // console.log( '下一个值', nextVal, canWay[key], canWay[key].indexOf( nextVal ) );
      if (canWay[key].indexOf(nextVal) === -1) continue;

      visited[next_row][next_col] = false;
      queue.push([next_row, next_col]);
    }
  }

  return ans;
};