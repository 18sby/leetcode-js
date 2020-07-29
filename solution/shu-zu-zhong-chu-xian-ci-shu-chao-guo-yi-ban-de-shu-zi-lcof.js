/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  摩尔投票法：
  如果有一个数字出现的次数超过数组的一半，那么使用摩尔投票法，
  最后一定会留下出现次数最多的那个数
  
  首先假设第一个数为众数，遍历数组，只要和当前众数相等，那么票数 +1
  如果不相等，票数 -1，如果票数为 0，那么继续假设下一个数为众数
*/
var majorityElement = function (nums) {
  let vote = 0, goal = null, n = nums.length;

  for (let i = 0; i < n; i++) {
    let c = nums[i];
    if (vote === 0) goal = c;
    if (c === goal) {
      vote += 1;
    } else {
      vote -= 1;
    }
  }

  return goal;
};