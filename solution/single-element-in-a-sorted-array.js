/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  二分法
  
  1. 每次先判断中间的值，是否只出现了一次，判断方法为：看他两边是否有相同的数即可
  2. 不断二分查找剩余元素个数为奇数的一边
*/
var singleNonDuplicate = function (nums) {
  let left = 0, n = nums.length, right = n - 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (mid === 0 && nums[mid] !== nums[mid + 1]) return nums[mid];
    if (mid === n - 1 && nums[mid] !== nums[mid - 1]) return nums[mid];
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];

    let leftLimit = mid, rightLimit = mid;
    if (nums[mid - 1] === nums[mid]) leftLimit = mid - 1;
    if (nums[mid + 1] === nums[mid]) rightLimit = mid + 1;

    if ((leftLimit - left) % 2 !== 0) {
      right = leftLimit - 1;
    } else if ((right - rightLimit) % 2 !== 0) {
      left = rightLimit + 1;
    }
  }
};

/*
  位运算方法，异或「^」的特点：任意两个相同的数值异或运算的结果都是 0
  
  原因：异或运算是二进制对位有且只有一个为 1 ，该位置的运算结果为 1，否则为 0，
  而两个相同的数进行异或运算，那么所有的二进制对位不可能出现有且只有一个为 1 的情况，
  所以所有二进制位的异或结果为 0，整体的结果转换为十进制也是 0
*/
var singleNonDuplicate = function (nums) {
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    ans ^= nums[i];
  }

  return ans;
};