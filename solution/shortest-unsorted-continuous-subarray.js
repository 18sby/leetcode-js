/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function (nums) {
  let minIndex = Infinity, maxIndex = -Infinity, sorted = [...nums];

  sorted.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sorted[i]) {
      if (i < minIndex) minIndex = i;
      if (i > maxIndex) maxIndex = i;
    }
  }

  let count = maxIndex - minIndex + 1

  return count < 0 ? 0 : count;
};