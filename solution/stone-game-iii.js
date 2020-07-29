/**
 * @param {number[]} stoneValue
 * @return {string}
 */

/*
  动态规划：（当做只有一个人）
  dp[i]：先手者从 i 开始拿，最终会领先敌人多少石子
  最后判断 dp[0] 的值就 ok 了，dp[0] 就是第一个拿的人最终会领先对手多少石子
  
  对于每一个点 i 都有三种选择：
    拿前一个，拿前两个，拿前三个，我们把三种方式都尝试一遍，看哪种方式会领先对手较多
    的石子，就采用哪种拿法
*/
var stoneGameIII = function (stoneValue) {
  let n = stoneValue.length, dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let max = -Infinity, sum = 0;

    for (let j = i; j < Math.min(i + 3, n); j++) {
      sum += stoneValue[j];
      let temp = sum - dp[j + 1]; // temp = 此人拿的石子和 - 对手拿石子的和
      max = Math.max(max, temp);
    }

    dp[i] = max;
  }

  let ans = dp[0] == 0
    ? 'Tie'
    : dp[0] < 0
      ? 'Bob'
      : 'Alice';

  return ans;
};