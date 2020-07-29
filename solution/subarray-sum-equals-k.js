/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
  哈希：使用哈希表记录 sum - k 出现的次数
*/

var subarraySum = function (nums, k) {
  let map = new Map([[0, 1]]),
    count = 0,
    sum = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    }
    else {
      map.set(sum, 1);
    }
  }

  return count;
}

/*
  计算出每个位置之前的所有项的和
  两个循环嵌套，只要后面减去前面或者不减 等于k那么找到一组解
*/
var subarraySum = function (nums, k) {
  let count = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    if (i > 0) {
      nums[i] = nums[i] + nums[i - 1];
    }
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === k) {
      count++;
    }
    for (let j = i + 1, len = nums.length; j < len; j++) {
      if (nums[j] - nums[i] === k) {
        count++;
      }
    }
  }

  return count;
};