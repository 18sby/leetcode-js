/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  使用额外空间
*/
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = true;
    }
    else if (map[nums[i]]) {
      delete map[nums[i]];
    }
  }

  return Object.keys(map)[0];
};