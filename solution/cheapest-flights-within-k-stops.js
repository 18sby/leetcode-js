/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

/*
  动态规划
  分析：
  - 求 dp[dst][K] -> 到 dst 点，经过中转 K 次，需要的花费
*/
var findCheapestPrice = function (n, flights, src, dst, K) {
  // 初始化 dp 数组，所有花费填充为 Infinity
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(Infinity);
  }

  // 填充 src 可直达的点
  for (let i = 0; i < flights.length; i++) {
    if (flights[i][0] === src) {
      dp[flights[i][1]][0] = flights[i][2];
    }
  }

  // 填充 dp[src][k] 都为 0
  // 不管通过几步到达初始点 src 花费都为0
  for (let i = 0; i < K; i++) {
    dp[src][i] = 0;
  }

  // 遍历填充可达的航班
  for (let k = 1; k <= K; k++) {
    for (let flight of flights) {
      if (flight[0] !== Infinity) {
        dp[flight[1]][k] = Math.min(dp[flight[1]][k], dp[flight[0]][k - 1] + flight[2]);
      }
    }
  }

  return dp[dst][K] === Infinity ? -1 : dp[dst][K];
}

/*
  到第 25 个测试用例超时 !! 还不如下面的 DFS
  队列 + BFS
  思路：
  1.每一次把遍历元素的出发城市等于当前目的地的点加入到队列中
  2.队列不为空，一直进行遍历队列
  3.开始先遍历一遍数组，找到出发城市为 src 的点，放到队列中
  - 队列中元素结构：[target, cost, stations] [当前所在城市, 目前花费, 中转次数]
  注意：如果当前所在城市为 dst ，那么 stations 还要减 1，
       因为当前城市为最终目的地，不算做中转
*/
var findCheapestPrice = function (n, flights, src, dst, K) {
  let queue = [],
    ans = -1,
    len = flights.length;

  for (let i = 0; i < len; i++) {
    if (flights[i][0] === src) {
      queue.push([flights[i][1], flights[i][2], 1]);
    }
  }

  while (queue.length > 0) {
    let curr = queue.shift();
    // 如果到达终点，计算，continue
    if (curr[0] === dst) {
      if (curr[2] - 1 <= K) {
        ans = ans === -1 ? curr[1] : Math.min(ans, curr[1]);
      }
      continue;
    }

    // 如果中转次数超过，剪掉，continue
    if (curr[2] > K) continue;

    // 遍历数组，找到起始点为当前 target 的点，继续放到队列中
    for (let i = 0; i < len; i++) {
      if (flights[i][0] === curr[0]) {
        queue.push([flights[i][1], curr[1] + flights[i][2], curr[2] + 1]);
      }
    }
  }

  return ans;
}

/*
  超时回溯法：O(n!) 到第 27 个测试用例超时
  思路：
  1.找到出发点为 src 的点，进行 DFS
  2.终止条件：中转站超过 k
  3.backtrack(当前费用，当前到达的目的地，转站次数，可选航线)
*/
var findCheapestPrice = function (n, flights, src, dst, K) {
  let ans = -1;

  function backtrack(cost, target, stations, store) {
    /*
      如果到达目的地了
        转站次数 - 1 <= K ? 对比最小花费记录
        终止此次递归
    */
    if (target === dst) {
      if (stations - 1 <= K) {
        ans = ans === -1 ? cost : Math.min(ans, cost);
      }
      return;
    }

    // 如果中转站次数超出，那么终止此次递归
    if (stations > K) return;

    // 递归调用
    for (let i = 0; i < store.length; i++) {
      let curr = store[i];
      // 如果遍历当前元素的出发城市不是当前目的地，那么跳过这个元素
      if (curr[0] !== target) continue;

      // 更新目的地，花费，中转次数，剩余可选元素
      let lastTarget = target;
      target = curr[1];
      cost += curr[2];
      stations += 1;
      backtrack(cost, target, stations, store.slice(0, i).concat(store.slice(i + 1)));
      // 回溯
      target = lastTarget;
      cost -= curr[2];
      stations -= 1;
    }
  }
  backtrack(0, src, 0, flights);

  return ans;
};