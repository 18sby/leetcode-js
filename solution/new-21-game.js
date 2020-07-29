/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
  if (K === 0) return 1;
  if (K === 1) return Math.min(N, W) / W;
  let dp = new Array(N + 1).fill(0);
  let sumArr = new Array(N + 1).fill(0);
  dp[0] = 1;
  for (let n = 1; n <= N; n++) {
    let left = Math.max(0, n - W);
    let right = Math.min(n - 1, K - 1);
    let p = (sumArr[right] - sumArr[left] + dp[left]) / W
    dp[n] = p;
    sumArr[n] = sumArr[n - 1] + p;
  }
  return sumArr[N] - sumArr[K - 1];
};