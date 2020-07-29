/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*
  利用数组已经排好序的性质
*/
var twoSum = function (numbers, target) {
  let low = 0, high = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum === target) {
      return [low + 1, high + 1];
    }
    if (sum > target) {
      high--;
    }
    else {
      low++;
    }
  }

  return [-1, -1];
}

var twoSum = function (numbers, target) {
  for (let i = 0, len = numbers.length; i < len; i++) {
    if (numbers[i] <= target) {
      for (let j = i + 1, len = numbers.length; j < len; j++) {
        if (numbers[j] + numbers[i] === target) {
          return [i + 1, j + 1];
        }
      }
    }
  }
};