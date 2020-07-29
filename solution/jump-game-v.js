/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */

/*
  典型的动态规划问题：
  1.从最低的圆柱下标开始向最高的圆柱坐标遍历
  2.对每一个当前圆柱 dp[i] = 在不越界的情况下，i 周围所有比 i 矮的圆柱中可访问下标个数最多的那个圆柱 + 1
    即：dp[i] = Math.max(dp[i - d], ..., dp[i - 1], dp[i + 1], ..., dp[i + d]) + 1
  注意：跳跃过程中，当前圆柱与目标圆柱之间不能有比当前高的柱子，所以对每一个圆柱而言，要用中间到两边的跳法
*/
var maxJumps = function (arr, d) {
  if (arr.length === 0) return 0;
  let dp = [],
    ans = 0;

  // 先排序，创建一个圆柱高度从低向高的一个索引数组
  let indexs = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    indexs.push(i);
  }
  indexs.sort((a, b) => {
    if (arr[a] > arr[b]) {
      return 1;
    } else {
      return -1;
    }
  });

  // 从低向高遍历上面的数组，直到最后，过程中比较所有的柱子的可访问坐标数，与结果进行比较
  for (let i = 0, len = indexs.length; i < len; i++) {
    let index = indexs[i],
      left = Math.max(index - d, 0),
      right = Math.min(index + d, arr.length),
      temp = [];

    // 中间到两边的跳法：遇到 left、right 边界，或者遇到比当前柱子高的柱子就停止
    // 找到所有的可访问点，进行最大值的比较
    let leftStart = index - 1, rightStart = index + 1;
    while (leftStart >= left && arr[leftStart] < arr[index]) {
      temp.push(leftStart);
      leftStart--;
    }
    while (rightStart <= right && arr[rightStart] < arr[index]) {
      temp.push(rightStart);
      rightStart++;
    }

    let curr = 0;
    for (let p = 0; p < temp.length; p++) {
      curr = Math.max(curr, dp[temp[p]]);
    }
    dp[index] = curr + 1;
    ans = Math.max(dp[index], ans);
  }

  return ans;
};