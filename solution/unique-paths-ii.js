/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/*
  动态规划：
  到每一个格子的路径只能来自于上方或者左边
  dp[i][j] = dp[i-1][j] + dp[i][j-1]
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length === 0 || obstacleGrid[0].length === 0) return 0;
  let row = obstacleGrid.length,
    col = obstacleGrid[0].length,
    dp = new Array(row).fill(1).map(_ => new Array(col).fill(0));

  // 初始化第一个格子
  if (obstacleGrid[0][0] == 0) {
    dp[0][0] = 1;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 && j == 0) continue;
      if (obstacleGrid[i][j] == 1) continue;

      // 越界当做 0
      let top = i - 1 >= 0 ? dp[i - 1][j] : 0,
        left = j - 1 >= 0 ? dp[i][j - 1] : 0;

      dp[i][j] = top + left;
    }
  }

  return dp[row - 1][col - 1];
};