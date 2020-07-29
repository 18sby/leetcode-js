/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  找到一个比两个数都大的数
*/
var increasingTriplet = function (nums) {
  let first = Infinity, second = Infinity;

  for (const value of nums) {
    if (value <= first) {
      first = value;
    } else if (value <= second) {
      second = value;
    } else {
      return true;
    }
  }

  return false;
}

/*
  动态规划
  dp[i]: 第 i 个元素前面比它小的元素有几个
*/
var increasingTriplet = function (nums) {
  let n = nums.length, dp = new Array(n).fill(1), ans = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      if (dp[i] >= 3) {
        ans = true;
        break;
      }
    }
  }

  return ans;
};