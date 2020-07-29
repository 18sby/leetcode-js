/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
  动态规划：
  dp[i]: 以第 i 个元素结尾的最大和只和 i 之前，与 i 相差 k 以内的位置为结尾的最大和有关
  
  1. 使用一个队列，也就是单调递减的数组，保存 i-k 到 i 之间的最大的 dp[j] 的值，每次
     求 dp[i] 的时候，都是在这个范围内找到一个 最大的 dp[j]，看它是否为负数，如果是负数，
     就抛弃它，当成 0，否则 dp[i] 就是 dp[j] + nums[i]，表示为代码就是
     
     dp[i] = Math.max(dp[j], 0) + nums[i]; 
  2. 队列为单调递减，所以每次在求 dp[i] 的时候，直接拿 dp[queue[queue[0]]] 就是最大
     值，因为队列是单调递减的，当 queue 为空的时候 dp[queue[queue[0]]] 就是 NaN，
     防止计算错误，这里做了处理
     dp[i] = Math.max(dp[queue[0]] || 0, 0) + curr;
                      —————————————————
*/
var constrainedSubsetSum = function (nums, k) {
  let len = nums.length;
  if (len === 0) return 0;
  let dp = new Array(len).fill(0);
  let max = -Infinity;
  let queue = [];

  for (let i = 0; i < len; i++) {
    let curr = nums[i];
    while (queue.length && queue[0] < i - k) queue.shift();

    // console.log( 'queue: ', queue, dp[queue[0]] );
    dp[i] = Math.max(dp[queue[0]] || 0, 0) + curr;
    while (queue.length && dp[queue[queue.length - 1]] < dp[i]) queue.pop();
    queue.push(i);
    max = Math.max(dp[i], max);
  }

  return max;
};