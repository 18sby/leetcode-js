/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */

// dp[i][j]：i次操作，j个鸡蛋测试的楼层数
var superEggDrop = function (K, N) {
  if (N === 0 || N === 1) return N;
  if (K === 1) return N;

  let dp = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));

  let m = 0;
  while (dp[m][K] < N) {
    m++;
    for (let i = 1; i <= K; i++) {
      dp[m][i] = dp[m - 1][i - 1] + dp[m - 1][i] + 1;
    }
  }

  return m;
}

// 超时：dp[i][j]：鸡蛋数，测试的楼层
var superEggDrop = function (K, N) {
  if (N === 0 || N === 1) return N;
  if (K === 1) return N;

  let dp = new Array(K + 1).fill(0).map(() => new Array(N + 1).fill(0));

  for (let i = 1; i <= N; i++) dp[1][i] = i;

  for (let i = 1; i <= K; i++) dp[i][1] = 1;

  for (let egg = 2; egg <= K; egg++) {
    for (let floor = 2; floor <= N; floor++) {
      let min = Infinity;
      for (let i = 1; i <= floor; i++) {
        min = Math.min(min, Math.max(dp[egg - 1][i - 1], dp[egg][floor - i]) + 1);
      }
      dp[egg][floor] = min;
    }
  }

  return dp[K][N];
};