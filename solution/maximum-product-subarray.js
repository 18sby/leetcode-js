/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  动态规划:
  dp[i][0] 从 0 到 i 的最小值
  dp[i][1] 从 0 到 i 的最大值
*/
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let n = nums.length;
  let dp = new Array(n),
    max = nums[0];

  for (let i = 0; i < n; i++) {
    dp[i] = [0, 0];
  }

  dp[0][0] = nums[0]; dp[0][1] = nums[0];

  for (let i = 1; i < n; i++) {
    let c = nums[i];
    if (c >= 0) {
      dp[i][0] = Math.min(dp[i - 1][0] * c, c);
      dp[i][1] = Math.max(dp[i - 1][1] * c, c);
    } else {
      dp[i][0] = Math.min(dp[i - 1][1] * c, c);
      dp[i][1] = Math.max(dp[i - 1][0] * c, c);
    }
    if (max < dp[i][1]) max = dp[i][1];
  }

  return max;
}

/*
  动态规划，参考作者「灵魂画手」
*/
// var maxProduct = function(nums) {
//   let max = Number.MIN_SAFE_INTEGER, iMin = 1, iMax = 1;

//   for (let i = 0; i < nums.length; i++) {
//     let c = nums[i];
//     if (c < 0) {
//       let temp = iMax;
//       iMax = iMin;
//       iMin = temp;
//     }
//     iMax = Math.max(iMax * c, c);
//     iMin = Math.min(iMin * c, c);
//     max = Math.max(max, iMax);
//   }

//   return max;
// }

/*
  思路：
  - 如果有 0 的话，把 0 看做分割点，用 0 分割数组为多个子数组，求每个子数组的最大子序列
  
  对每个不含 0 的子数组，有以下几种情况：
    !: 正数肯定是越多越好，所以我们主要以负数的个数来讨论不同情况
    1. 序列中有偶数个负数，那么全部乘上即可
    2. 序列中有奇数个负数，那么有两种情况
      (1) 从左到右，放弃掉一个负数，得到一个较大的乘积
      (2) 从右到左，放弃掉一个负数，得到一个较大的乘积
          比较返回较大的即可
    
  最后，如果我们前面计算的最大子序列的乘积小于 0，但是原数组中有 0 的话，我们返回 0
*/
var maxProduct = function (nums) {
  const n = nums.length;
  let hasZero = false, max = -Infinity, start = 0;

  // 计算这段数组中的最大子序列乘积并和 max 比较，更新 max
  function calculateMax(arr) {
    console.log('计算这段', arr);
    if (arr.length === 0) return;
    let odd = 0,
      alen = arr.length,
      amass = null,
      first = null,
      last = null;

    for (let i = 1; i < alen; i++) {
      let c = arr[i];
      if (amass === null) {
        amass = c;
      } else {
        amass *= c;
      }
      if (c < 0) {
        if (first === null) first = i;
        last = i;
        odd++;
      }
    }

    if (odd % 2 === 0) {
      console.log('这里？s', amass, max);
      max = Math.max(amass, max);
    } else {
      let leftMax = null, rightMax = null;
      for (let i = 0; i < last; i++) {
        if (leftMax === null) leftMax = nums[i];
        else leftMax *= nums[i];
      }
      for (let i = n - 1; i > first; i--) {
        if (rightMax === null) rightMax = nums[i];
        else rightMax *= nums[i];
      }
      max = Math.max(max, leftMax, rightMax);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      hasZero = true;
      calculateMax(nums.slice(start, i));
      start = i + 1;
    }
  }

  if (!hasZero) calculateMax(nums);

  if (start < n) calculateMax(nums.slice(start, n));

  return (max < 0 && hasZero) ? 0 : max;
};