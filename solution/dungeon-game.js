/**
 * @param {number[][]} dungeon
 * @return {number}
 */

/*
  动态规划
  找到所有路线中到某一个格子最多的健康值，对比返回最多的健康值 +1 (保证健康值至少是1)
*/
var calculateMinimumHP = function (dungeon) {
  if (!dungeon.length === 0 || dungeon[0].length === 0) return 0;
  let row = dungeon.length,
    col = dungeon[0].length,
    dp = new Array(row + 1).fill(1).map(_ => new Array(col + 1).fill(Infinity));

  dp[row][col - 1] = 1;
  dp[row - 1][col] = 1;

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      let min = Math.min(dp[i + 1][j], dp[i][j + 1])
      dp[i][j] = Math.max(min - dungeon[i][j], 1);
    }
  }

  return dp[0][0];
};