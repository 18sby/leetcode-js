/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  function sort(arr) {
    if (arr.length <= 1) return arr;
    let left = [], right = [], n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] <= arr[n - 1]) left.push(arr[i]);
      if (arr[i] > arr[n - 1]) right.push(arr[i]);
    }
    return sort(left).concat(arr[n - 1], sort(right));
  }

  return sort(nums);
};