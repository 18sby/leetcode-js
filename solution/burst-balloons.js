/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  看了别人的题解，其实我理解的也不是很透彻 O(∩_∩)O
  动态规划：
  分析：
  - dp[i][j] 表示不包含 i 和 j ，只包含他们中间的部分
  - numsCopy 复制原数组，0 和 最后一个索引赋值为 1，作为越界处理
  - 初始化 dp数组，dp[i][i] 都为 0，因为它内部的区间是空的，第一条已经解释了
  - space 代表区间内的长度，从 1 开始，直到 n - 1 停止，因为原数组的长度就是 n - 1
  - 最终返回 dp[0][n - 1] 因为 0 和 (n - 1) 中间就是代表原数组 nums 所有元素的区间
    第一条已经解释过了，这个区间不包含 0 和 (n - 1) 这两个元素
*/
var maxCoins = function (nums) {
  // 先 copy 一份数组做越界处理
  let dp = [],
    n = nums.length,
    numsCopy = new Array(n + 2);
  numsCopy[0] = 1;
  numsCopy[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    numsCopy[i] = nums[i - 1];
  }
  n = numsCopy.length; // 把添加了首尾虚拟边界的数组长度赋值给 n

  // 初始化 dp 数组，每个区间 dp[i][j] 不包含 i 和 j
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
  }

  // 动态规划开始，区间长度从 1 扩展到 copy数组的长度
  for (let space = 1; space < n; space++) {
    for (let i = 0; i + space < n; i++) {
      for (let j = i + 1; j < i + space; j++) {
        dp[i][i + space] = Math.max(dp[i][i + space], dp[i][j] + dp[j][i + space] + numsCopy[i] * numsCopy[j] * numsCopy[i + space]);
      }
    }
  }

  return dp[0][n - 1];
}

/*
  先写个 n! 复杂度的必定超时回溯法
  n! 的时间复杂度的算法，在 n = 11 的时候就会超时，本题在第 24 个测试用例
*/
var maxCoins = function (nums) {
  let ans = 0;

  function backtrack(coins, store) {
    // 终止条件
    if (store.length === 0) {
      return ans = Math.max(coins, ans);
    }

    // 递归调用
    for (let i = 0; i < store.length; i++) {
      let mid = store[i],
        left = i - 1 < 0 ? 1 : store[i - 1],
        right = i + 1 > store.length - 1 ? 1 : store[i + 1];

      let curr = mid * left * right;
      coins += curr;
      backtrack(coins, store.slice(0, i).concat(store.slice(i + 1)));
      coins -= curr;
    }
  };
  backtrack(0, nums);

  return ans;
};