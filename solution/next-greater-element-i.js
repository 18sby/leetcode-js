/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
  参考官方题解
  1.对 nums2 维护一个单调栈，计算出 nums2 中每一个元素的下一个更大的元素，存到map中
  2.遍历 nums1，去 map 中查找就好了
*/
var nextGreaterElement = function (nums1, nums2) {
  let stack = [], map = new Map(), ans = [];

  for (let i = 0, len = nums2.length; i < len; i++) {
    let curr = nums2[i];
    while (stack.length > 0 && curr > stack[stack.length - 1]) {
      map.set(stack.pop(), curr);
    }
    stack.push(curr);
  }

  while (stack.length > 0) {
    map.set(stack.pop(), -1);
  }

  for (let i = 0, len = nums1.length; i < len; i++) {
    ans.push(map.get(nums1[i]));
  }

  return ans;
};