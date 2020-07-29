/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  bfs
  思路：
  1.遍历一遍矩阵，找到所有腐烂的橘子，加入到队列中，记录所有的新鲜橘子数量
  2.对腐烂橘子队列进行 bfs，直到队列为空
  3.判断此时是否还有新鲜橘子，如果有那么返回 -1，否则返回分钟数
*/
var orangesRotting = function (grid) {
  let minutes = 0,
    freshOranges = 0,
    queue = [];

  // 创建腐烂橘子队列，记录新鲜橘子总数
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j, 0]); // 代表当前是第几分钟的烂橘子
      if (grid[i][j] === 1) freshOranges++;
    }
  }

  // 橘子的腐烂过程
  while (queue.length > 0) {
    let curr = queue.shift();
    minutes = curr[2];
    markRot(curr[0], curr[1], curr[2]);
  }

  // 标记腐烂橘子
  function markRot(row, col, currMinute) {
    // 四个方向
    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let i = 0; i < 4; i++) {
      let r = row + ways[i][0],
        c = col + ways[i][1];
      // 如果越界，或者不是好橘子，那么跳过
      if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== 1) continue;
      // 如果是烂橘子，那么把它标记为烂橘子，放到烂橘子队列中，标记为下一分钟，让新鲜橘子数量减 1
      grid[r][c] = 2;
      freshOranges--;
      queue.push([r, c, currMinute + 1]);
    }
  }

  return freshOranges > 0 ? -1 : minutes;
};