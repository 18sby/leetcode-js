/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  想了半天，建立索引数组啥的，调试了一会烦了，暴力解千愁
*/
var smallerNumbersThanCurrent = function (nums) {
  let ans = [], n = nums.length;

  for (let i = 0; i < n; i++) {
    let c = nums[i], count = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && nums[j] < c) {
        count++;
      }
    }
    ans.push(count);
  }

  return ans;
};