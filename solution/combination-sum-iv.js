/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  借用作者：coder_hezi 的思路和题解，解释的非常清楚
  动态规划
  别怪我写的这么完整
  dp[i]=dp[i-nums[0]]+dp[i-nums[1]]+dp[i=nums[2]]+...
  举个例子比如nums=[1,3,4],target=7;
  dp[7]=dp[6]+dp[4]+dp[3]
  其实就是说7的组合数可以由三部分组成，1和dp[6]，3和dp[4],4和dp[3];
  int[]dp=new int[target+1];
  是为了算上自己的情况，比如dp[1]可以由dp【0】和1这个数的这种情况组成。
*/
var combinationSum4 = function (nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
}

/*
  超时
  回溯解法，深度优先搜索
*/
var combinationSum4 = function (nums, target) {
  let ans = 0;

  function backtrack(count, index, store) {
    // 终止条件
    if (count > target) return;

    // 如果找到一个解，那么答案 + 1，终止此次递归
    if (count === target) {
      return ans++;
    }

    // 递归调用
    for (let i = index; i < store.length; i++) {
      count += store[i];
      backtrack(count, index, store);
      count -= store[i];
    }
  }
  backtrack(0, 0, nums);

  return ans;
};