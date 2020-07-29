/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  - 摘樱桃的同时过来先搞一下这道题
  
  - 这道题可以不断分解子问题，所以回溯我们就跳过了，直接上动态规划
  
  - 到每一个格子的最小路径和为到这个格子的上面格子的最小路径和到这个格子左面格子的
    最小路径和 + 当前格子数字
    即：dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
  
  - 动态转移方程出来了，就可以写代码了，要注意边界处理
  
  - 因为越界就是没有格子，没有格子我们肯定不会选的，所以直接把它定义为 Infinity 就好了
*/
var minPathSum = function (grid) {
  let dp = [];

  let row = grid.length;
  if (row === 0) return 0;
  let col = grid[0].length;

  for (let i = 0; i < row; i++) {
    dp[i] = [];
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else {
        let top = i - 1 < 0 ? Infinity : dp[i - 1][j],
          left = j - 1 < 0 ? Infinity : dp[i][j - 1];

        dp[i][j] = Math.min(top, left) + grid[i][j];
      }
    }
  }

  return dp[row - 1][col - 1];
};