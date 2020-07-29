/**
 * @param {number[]} nums
 * @return {string}
 */

/*
  直接通过拼接判断
*/
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let noChange = Number(String(a) + String(b));
    let change = Number(String(b) + String(a));
    let res = noChange > change ? -1 : 1;

    return res;
  });

  while (nums.length > 1 && nums[0] == 0 && nums[1] == 0) nums.shift();

  return nums.join('');
};