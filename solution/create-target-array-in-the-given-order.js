/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let arr = [];

  for (let i = 0; i < index.length; i++) {
    let inx = index[i], val = nums[i];
    arr.splice(inx, 0, val);
  }

  return arr;
};