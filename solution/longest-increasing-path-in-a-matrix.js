/**
 * @param {number[][]} matrix
 * @return {number}
 */

/*
  优先队列的动态规划：除了记忆化搜索还有动态规划之外，我还有另一种想法：不知可不可行：
  把矩阵的数字排序放到一个队列当中，从最小的开始分析，一直到矩阵中的所有数字分析完，
  分析的过程就是，看这个点的四周到自己的最长路径
  
  分析过程中，如果它四周的某个点还没有被分析过或者越界就跳过，分析过的话，就用 dp 数组
  中它的值
*/
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;

  let rowLimit = matrix.length,
    colLimit = matrix[0].length,
    dp = new Array(rowLimit),
    analysed = new Array(rowLimit), // 是否分析过的标记二维数组
    queue = [],
    maxLong = 1;

  // 初始化 dp，都为 undefined 即可，因为都没分析过
  for (let i = 0; i < rowLimit; i++) {
    analysed[i] = new Array(colLimit);
    dp[i] = new Array(colLimit);
  }

  // 初始化队列
  for (let row = 0; row < rowLimit; row++) {
    for (let col = 0; col < colLimit; col++) {
      queue.push([row, col]);
    }
  }

  // 对队列排序，正序，小的在前(这里正序、逆序都可以)，主要是按照矩阵中值的大小有顺序即可，为了后面从小到大拿出矩阵中的坐标进行分析
  queue.sort((a, b) => matrix[a[0]][a[1]] - matrix[b[0]][b[1]]);

  // 从小到大依次分析
  for (let i = 0; i < queue.length; i++) {
    let [row, col] = queue[i],
      currValue = matrix[row][col];

    let max = 0;

    let ways = [
      [-1, 0], [0, 1], [1, 0], [0, -1]
    ];

    for (let way of ways) {
      let next_row = row + way[0],
        next_col = col + way[1];

      if (
        next_row < 0 || next_col < 0 || next_row >= rowLimit ||
        next_col >= colLimit ||
        matrix[next_row][next_col] >= currValue ||
        !analysed[next_row][next_col]
      ) {
        continue;
      }

      max = Math.max(dp[next_row][next_col], max);
    }

    dp[row][col] = max + 1;
    analysed[row][col] = 1;
    maxLong = Math.max(dp[row][col], maxLong);
  }

  return maxLong;
}

/*
  DFS(未完成缓存优化，暂时超时)
  不能重复访问，避免有环，从每一个点进行 dfs，直到边界或者四周都不可以递增，统计这条路径
  的长度，更新当前统计的最长长度。
  
  会超时，需要一个缓存数据保存已访问过的路径的长度，不然会超时，因为有大量的重复计算
  cache[row][col]: 从这个点开始的最长路径的长度
*/
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;

  let rowLimit = matrix.length,
    colLimit = matrix[0].length,
    visited = new Array(rowLimit),
    maxLong = 1;

  // 初始化去重用的矩阵以及缓存已计算过的路径的缓存
  for (let i = 0; i < rowLimit; i++) visited[i] = new Array(colLimit);

  function dfs(row, col, long) {
    maxLong = Math.max(long, maxLong);

    let ways = [
      [-1, 0], [0, 1], [1, 0], [0, -1]
    ];

    for (let way of ways) {
      let next_row = row + way[0],
        next_col = col + way[1];

      if (
        next_row < 0 || next_col < 0 || next_row >= rowLimit ||
        next_col >= colLimit ||
        matrix[next_row][next_col] <= matrix[row][col] ||
        visited[next_row][next_col]
      ) {
        continue;
      }

      visited[next_row][next_col] = true;
      dfs(next_row, next_col, long + 1);
      visited[next_row][next_col] = false;
    }
  }

  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      visited[i][j] = true;
      dfs(i, j, 1);
      visited[i][j] = false;
    }
  }

  return maxLong;
};