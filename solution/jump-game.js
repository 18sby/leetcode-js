/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  参考作者「Ikaruga」
  贪心：尝试每一个格子能够跳到的最远距离，不断更新
  核心是：如果从位置 3 可以跳到 位置 8，那么中间的 4、5、6、7 都可到达，
  但是如果遇到下一个位置 i ，超过了目前可跳的最远距离 k ，那么直接返回 false 即可，
  因为 i 位置左侧可跳的最远距离 k 都到达不了下一个位置 i，那么 i 和 i 后面的
  位置皆不可到达。
*/
var canJump = function (nums) {
  let n = nums.length,
    k = 0;

  for (let i = 0; i < n; i++) {
    if (i > k) return false;
    k = Math.max(i + nums[i], k);
  }

  return true;
};

/*
  动态规划 O(n^2) 364ms
  从头开始，判断每一个元素是否可以到达，一旦判断当前点可以到达，跳过即可，
  一旦遇到某个点不能到达，那么直接退出整个循环返回 false 即可
*/
var canJump = function (nums) {
  let n = nums.length,
    dp = new Array(n).fill(false);

  dp[0] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
    if (dp[i] === false) break;
  }

  return dp[n - 1];
};