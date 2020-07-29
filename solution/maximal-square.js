/**
 * @param {character[][]} matrix
 * @return {number}
 */

/*
  动态规划：
  
  dp[row][col] 代表以当前网格为正方形右下角的顶点的边长
  
  每个网格只受它的自身点、上边的点，上左的点，还有左边的点的影响，
  如果当前点是 0，那么以它为右下角顶点的正方形边长一定是 0，
  否则以它为右下角顶点的最大正方形边长为
  Math.min(上面点，上左点，左边点) + 1;
  
  dp[row][col] = matrix[row][col] === 0
    ? 0
    : Math.min(dp[row - 1][col], dp[row - 1][col - 1], dp[row][col - 1]) + 1
    
  注意如果上、上左、左 三个点越界，那么当做 0
*/
var maximalSquare = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  let rowLimit = matrix.length,
    colLimit = matrix[0].length,
    dp = [],
    max = 0;

  for (let i = 0; i < rowLimit; i++) dp[i] = [];

  for (let row = 0; row < rowLimit; row++) {
    for (let col = 0; col < colLimit; col++) {
      if (matrix[row][col] == 0) {
        dp[row][col] = 0;
      } else {
        let topLeft =
          ((row - 1 < 0) || (col - 1 < 0)) ? 0 : dp[row - 1][col - 1],
          top = (row - 1 < 0) ? 0 : dp[row - 1][col],
          left = (col - 1 < 0) ? 0 : dp[row][col - 1];
        dp[row][col] = Math.min(
          topLeft,
          left,
          top
        ) + 1;
      }
      max = Math.max(max, dp[row][col]);
    }
  }

  return max * max;
};