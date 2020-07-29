/**
 * @param {number[]} nums
 * @return {number}
 */

// 参考作者：rhinoc ( 给作者点赞 这思路太6了! )
// 思路：定义一个默认索引 n = 0，从索引1开始遍历数组，每一个元素和他之前的元素比较，
//      如果不相等那么就把这个值存到 n++ 的位置，最终返回 n+1 就是数组的无重复部分的长度
var removeDuplicates = function (nums) {
  let n = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      n++;
      nums[n] = nums[i];
    }
  }
  return n + 1;
};