/**
 * @param {number[][]} triangle
 * @return {number}
 */

/*
  动态规划，每次都有两种选择
  状态转移方程：
  
  dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
  
  dp[i][j]: 从下往上，到第 i 层，第 j 个索引的位置的路径和最小值
  
  每一个位置有两个选择：
    1. 当前位置相同索引的下一层的值
    2. 当前位置索引 +1 的下一层的值
  从倒数第二层开始，向上动态规划不用做特判，因为对于每一个值，它的下层相同索引和下层相同
  索引 +1 位置一定是存在的，因为每层会比上层多一个元素
  
  2
  3 4
  6 5 7
  4 1 8 3
*/
var minimumTotal = function (triangle) {
  let len = triangle.length;
  if (len === 0) return 0;
  let dp = JSON.parse(JSON.stringify(triangle));

  for (let i = len - 2; i >= 0; i--) {
    let rowLimit = triangle[i].length;
    for (let j = rowLimit - 1; j >= 0; j--) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
};