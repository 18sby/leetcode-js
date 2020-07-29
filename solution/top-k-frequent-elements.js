/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
  最慢的方法，遍历一遍
*/
var topKFrequent = function (nums, k) {
  let map = new Map();

  for (let i = 0, len = nums.length; i < len; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    }
    else {
      map[nums[i]] = map[nums[i]] + 1;
    }
  }

  let keys = Object.keys(map).sort((a, b) => { return map[a] - map[b] });

  let res = [], tmp;
  while (k > 0) {
    tmp = keys.pop();
    res.push(tmp);
    k--;
  }

  return res;
};