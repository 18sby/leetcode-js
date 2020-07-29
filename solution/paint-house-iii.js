/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */

/*
  dp[i][j][k] 第 i 个房子，染上 j 颜色，形成 k 个社区的最小代价
*/
var minCost = function (houses, cost, m, n, target) {
  let dp = new Array(m).fill(1).map(() => {
    return new Array(n + 1).fill(1).map(() => {
      return new Array(target + 1).fill(Infinity);
    })
  });

  // 初始化状态
  if (houses[0] !== 0) {
    dp[0][houses[0]][1] = 0; // 第一个房子有颜色，所以初始化花费为 0
  } else {
    for (let j = 1; j <= n; j++) {
      // 第一个房子没有颜色，所以初始化它染上每一种颜色，形成 1 个社区的代价
      dp[0][j][1] = cost[0][j - 1];
    }
  }

  for (let i = 1; i < m; i++) {
    if (houses[i] === 0) {
      for (let j1 = 1; j1 <= n; j1++) {
        for (let k = 1; k <= target; k++) {
          for (let j2 = 1; j2 <= n; j2++) {
            if (j1 === j2) {
              dp[i][j1][k] = Math.min(dp[i][j1][k], dp[i - 1][j2][k] + cost[i][j1 - 1]);
            } else {
              dp[i][j1][k] = Math.min(dp[i][j1][k], dp[i - 1][j2][k - 1] + cost[i][j1 - 1]);
            }
          }
        }
      }
    } else {
      for (let k = 1; k <= target; k++) {
        for (let j2 = 1; j2 <= n; j2++) {
          let j1 = houses[i];
          if (j1 === j2) {
            dp[i][j1][k] = Math.min(dp[i][j1][k], dp[i - 1][j2][k]);
          }
          else {
            dp[i][j1][k] = Math.min(dp[i][j1][k], dp[i - 1][j2][k - 1]);
          }
        }
      }
    }
  }
  // console.log( 'dp: ', dp );

  let ans = Infinity;
  for (let i = 1; i <= n; i++) {
    ans = Math.min(ans, dp[m - 1][i][target]);
  }
  if (ans === Infinity) {
    ans = -1;
  }
  return ans;
};