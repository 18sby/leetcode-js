/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

/*
  二分查找，再次优化时间 => O(logN)
  思路：
  1.先用二分法找到等于x或者最接近x的数
  2.从它向两边查找，依次找到 k 个数，返回。
    先找到等于或者最接近 x 的数 n，那么答案一定在 arr[n - k] - arr[n + k] 之间。
    对这个区间从两侧向中间删除 m 个数，使留下的元素个数为 k 即可
    要注意 arr[n - k] - arr[n + k] 的越界问题
*/
var findClosestElements = function (arr, k, x) {
  let low = 0,
    high = arr.length,
    left = null,
    right = null;

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      low = mid;
      break;
    }

    if (arr[mid] <= x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  left = Math.max(0, low - k - 1);
  right = Math.min(arr.length - 1, low + k + 1);

  while (right - left >= k) {
    if (x - arr[left] <= arr[right] - x) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, right + 1);
};

/*
  O(N)的时间复杂度 108ms time over 79%
  双指针，从两头向中间切，留 k 个元素
*/
var findClosestElements = function (arr, k, x) {
  let left = 0,
    right = arr.length - 1;

  while (right - left >= k) {
    if (x - arr[left] <= arr[right] - x) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, right + 1);
}