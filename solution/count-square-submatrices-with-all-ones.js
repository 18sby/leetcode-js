/**
 * @param {number[][]} matrix
 * @return {number}
 */

/*
  看官方题解的图很清楚，以当前点为右下角的最大正方形边长为 4 的话，那么如果以当前点的
  左边，左上，上边这三个点为右下角的边长为 3(4-1) 的正方形满足条件的话，那么以当前点
  为右下角的边长为 4 的正方形也满足条件。
  
  状态转移方程: dp[i][j] 表示以这个点为右下角的正方形边长
  dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
  
  通过观察发现，如果以当前点为右下角的最大满足条件的正方形边长为 3 的话，那么以当前点为右下角
  的满足条件的正方形个数也是 3
*/
var countSquares = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  let rowLimit = matrix.length, colLimit = matrix[0].length, count = 0;
  let dp = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      if (matrix[i][j] !== 0) {
        // 如果不越界，那就求出以当前点为右下角的正方形边长
        if (i - 1 >= 0 && j - 1 >= 0) {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
          count += dp[i][j]; // 边长是几，以当前点为右下角的正方形就有几个，通过观察可以得出此结论
        } else { // 如果越界了，也要加 1，至少当前点是1，可以计为一个正方形
          count += 1;
        }
      }
    }
  }

  return count;
};