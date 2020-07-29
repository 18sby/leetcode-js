/**
 * @param {number[]} A
 * @return {number}
 */

/*
  优化的动态规划
  巧妙的点在于：dp[j][tol] && dp[j][tol] !== 0
  如果满足这个条件，说明 i j(i-tol) j-tol 至少有这三个数可以构成等差数列，此时统计个数即可
*/
var numberOfArithmeticSlices = function (A) {
  let n = A.length,
    dp = new Array(n).fill(1).map(_ => []),
    max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let tol = A[i] - A[j];
      dp[i][tol] = dp[i][tol] ? dp[i][tol] : 0;
      dp[j][tol] = dp[j][tol] ? dp[j][tol] : 0;
      dp[i][tol] += dp[j][tol] + 1;
      if (dp[j][tol] && dp[j][tol] !== 0) {
        max += dp[j][tol];
      }
    }
  }

  return max;
};

/*
  8600ms
  动态规划
  dp[i][j] 以 i 为最后一个元素公差为 j 的等差数列个数
*/
var numberOfArithmeticSlices = function (A) {
  let n = A.length,
    weak = new Map(),
    map = new Map(),
    dp = new Array(n).fill(1).map(_ => []),
    max = 0;

  // 找到弱等差数列(长度为2的伪等差数列)，存到 weak 中
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let tol = A[i] - A[j];
      if (!weak.has(`${i}-${tol}`)) {
        weak.set(`${i}-${tol}`, 1);
      } else {
        weak.set(`${i}-${tol}`, weak.get(`${i}-${tol}`) + 1);
      }

      dp[j][tol] = dp[j][tol] ? dp[j][tol] : 0;
      dp[i][tol] = dp[i][tol] ? dp[i][tol] : 0;

      if (weak.has(`${j}-${tol}`)) {
        dp[i][tol] += weak.get(`${j}-${tol}`);
      }

      dp[i][tol] += dp[j][tol];

      map[`${i}-${tol}`] = dp[i][tol];
    }
  }

  // console.log( 'dp: ', dp );
  // console.log( 'map: ', map );
  max = Object.values(map).reduce((total, prev) => total + prev, 0);

  return max;
};