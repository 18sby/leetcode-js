/**
 * @param {number[]} A
 * @return {number}
 */

/*
  二分搜索
  如果正在上坡，那么峰顶一定在后面，否则在前面
  A[mid] < A[mid + 1] -> 上坡 -> low = mid + 1
  else -> high = mid
*/
var peakIndexInMountainArray = function (A) {
  let low = 0,
    high = A.length - 1;

  while (low < high) {
    let mid = low + ((high - low) >> 1);

    if (A[mid] < A[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};