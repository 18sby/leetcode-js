/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  不断更新起跳点和最远距离
*/
var jump = function (nums) {
  let n = nums.length, start = 0, end = 1, count = 0;

  while (end < n) {
    let maxPos = 0;
    for (let i = start; i < end; i++) {
      maxPos = Math.max(maxPos, i + nums[i])
    }
    start = end;
    end = maxPos + 1;
    count++;
  }

  return count;
};

/*
  超时
  动态规划
  状态是：当前的位置和所用的步数
  选择是：可以到当前位置的所有位置，选择步数最少的那一个
*/
var jump = function (nums) {
  let n = nums.length, dp = new Array(n).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[n - 1];
};