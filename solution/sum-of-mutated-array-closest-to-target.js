/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

/*
  1. 数组先排序，为了不断计算数组和的时候比较方便
  2. 二分查找，找到使数组和最接近 target 的 value，二分查找的时候让左边界收缩，最终拿到的
     right 就是最接近的右边界，但是最终还要比较一下 right 和 right - 1 哪一个更接近
     如果 right - 1 和 right 计算的数组和与 target 的绝对值相等呢？那么返回 right - 1，
     题目要求是返回尽可能小的那个数
*/
var findBestValue = function (arr, target) {
  let len = arr.length;
  arr = arr.sort((a, b) => a - b);
  let ans;

  // 计算前缀和，优化计算数组和的时间
  let prefixSum = [], tempSum = 0;
  prefixSum[-1] = 0;
  for (let i = 0; i < len; i++) {
    tempSum += arr[i];
    prefixSum[i] = tempSum;
  }

  // 二分查找范围是：0 ~ max(arr) 
  let left = 0, right = arr[len - 1], mid;
  while (left < right) {
    mid = left + ((right - left) >> 1);
    let sum = calculateSum(arr, mid, len, prefixSum);
    if (sum >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  // 比较 right 和 right - 1 两个数，哪一个使数组和最接近 target，返回它
  // 这里比较 left 和 left - 1 也行，因为上面的二分结束时，left 和 right 是相等的
  let rightSum = calculateSum(arr, right, len, prefixSum),
    beforeRightSum = calculateSum(arr, right - 1, len, prefixSum);

  let diffRight = Math.abs(rightSum - target),
    diffBeforeRight = Math.abs(beforeRightSum - target);

  return diffBeforeRight <= diffRight ? right - 1 : right;
};

// 使用前缀和，计算「使得将数组中所有大于 value 的值变成 value 后」的和
function calculateSum(arr, mid, len, prefixSum) {
  let sum = 0, i = 0;
  while (i < len) {
    if (arr[i] > mid) break;
    i++;
  }
  sum = (len - i) * mid + prefixSum[i - 1];
  return sum;
}

/*
  700ms
  依次遍历 0 - target 的情况，去计算比较，使用前缀和优化
*/
var findBestValue = function (arr, target) {
  let len = arr.length;
  arr = arr.sort((a, b) => a - b);
  let diff = Infinity;
  let ans;
  let prefixSum = [], tempSum = 0;
  prefixSum[-1] = 0;

  for (let i = 0; i < len; i++) {
    tempSum += arr[i];
    prefixSum[i] = tempSum;
  }

  for (let i = 0; i <= target; i++) {
    let sum = calculateSum(arr, i, len, prefixSum);
    let currDiff = Math.abs(sum - target);
    if (currDiff < diff) {
      diff = currDiff;
      ans = i;
    }
  }

  return ans;
};

function calculateSum(arr, mid, len, prefixSum) {
  let sum = 0, i = 0;
  while (i < len) {
    if (arr[i] > mid) break;
    i++;
  }
  sum = (len - i) * mid + prefixSum[i - 1];
  return sum;
}