/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

/*
  76ms
  动态规划(看了官方思路)：
  核心：如果格子的左或者上市可达的，并且当前格子是的数位之和小于k，那么当前格子可达
*/
var movingCount = function (m, n, k) {
  if (m === 0 || n === 0) return 0;

  let count = 0, dp = new Array(m);
  for (let i = 0; i < m; i++) dp[i] = new Array(n);

  const calculateSum = (a, b) => {
    let x = String(a), y = String(b), sum = 0;
    for (let i = 0; i < x.length; i++) sum += (+ x.charAt(i));
    for (let i = 0; i < y.length; i++) sum += (+ y.charAt(i));
    return sum;
  }

  // 初始化第一个格子为可达 true
  dp[0][0] = true;
  count++;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      let top = false, left = false;

      top = row - 1 < 0 ? top : dp[row - 1][col];
      left = col - 1 < 0 ? left : dp[row][col - 1];

      if ((top || left) && calculateSum(row, col) <= k) {
        count++;
        dp[row][col] = true;
      }
    }
  }

  return count;
};

/*
  68ms
  直观方法 dfs：判断所有格子是否可走，每次遇到新格子，统计次数 + 1，遇到不能走的停止即可。
*/
var movingCount = function (m, n, k) {
  if (m === 0 || n === 0) return 0;

  let count = 0, visited = new Array(m);
  for (let i = 0; i < m; i++) visited[i] = new Array(n);

  const calculateSum = (a, b) => {
    let x = String(a), y = String(b), sum = 0;
    for (let i = 0; i < x.length; i++) sum += (+ x.charAt(i));
    for (let i = 0; i < y.length; i++) sum += (+ y.charAt(i));
    return sum;
  }

  function dfs(row, col) {
    count++;

    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for (const way of ways) {
      let next_row = row + way[0],
        next_col = col + way[1];

      if (
        next_row < 0 || next_row >= m ||
        next_col < 0 || next_col >= n ||
        visited[next_row][next_col]
      ) continue;
      visited[next_row][next_col] = 1;
      if (calculateSum(next_row, next_col) > k) continue;
      dfs(next_row, next_col);
    }
  }
  visited[0][0] = 1;
  dfs(0, 0);

  return count;
};