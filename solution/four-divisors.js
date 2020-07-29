/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  除了 1 和 本身之外，有且仅有一对不相等的因子才统计它的和
*/
var sumFourDivisors = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num < 5) continue;

    let prefix_two = 1 + num,
      midRoot = Math.sqrt(num),
      findRes = 0,
      suffix_two = null;

    for (let j = 2; j <= midRoot; j++) {
      let temp = num / j;
      if (num % j === 0) {
        findRes++;

        if (findRes === 1 && temp !== j) {
          suffix_two = temp + j;
        } else {
          break;
        }
      }
    }

    console.log('打印: ', prefix_two, suffix_two);
    if (findRes === 1 && suffix_two !== null) {
      sum += (suffix_two + prefix_two);
    }
  }

  return sum;
};