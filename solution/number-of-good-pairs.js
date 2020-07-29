/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function (nums) {
  let map = {},
    count = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    let num = nums[i];
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      count += map[num];
      map[num] += 1;
    }
  }

  return count;
};