/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

/*
  二分查找
  利用矩阵的特点，对于某一个位置而言，它的左边和上边的数一定比它小，
  它的右边和下边的数一定比它大。
  可以用二分找到一个数左上部分比它小的数有 k - 1 个即可
*/
var kthSmallest = function (matrix, k) {
  let left = matrix[0][0],
    row = matrix.length,
    col = matrix[0].length,
    right = matrix[row - 1][col - 1];

  // 判断矩阵中 <= value 的数是不是 >= k
  const isValid = (value, k, arr, row, col) => {
    let count = 0,
      i = 0,
      j = col - 1;
    while (i < row && j >= 0) {
      if (matrix[i][j] <= value) {
        count += j + 1;
        i++;
      } else {
        j--;
      }
    }

    return count >= k;
  }

  // 二分
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (isValid(mid, k, matrix, row, col)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

/*
  暴力法：
  - 先合并数组排序
  - 直接查找第 k - 1 个元素
*/
var kthSmallest = function (matrix, k) {
  let arr = [], count = 0;

  for (let i = 0; i < matrix.length; i++) {
    arr.push(...matrix[i]);
  }

  arr.sort((a, b) => a - b);

  return arr[k - 1];
};