/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  维护一个单调栈和一个map
  要遍历 nums 两遍，因为是循环的，查找最后一个元素的下一个最大元素要查找到它的上一个元素的位置
  因为有重复值，所以要按照索引存储
*/
var nextGreaterElements = function (nums) {
  let stack = [], map = new Map(), ans = [], loop = 0;

  for (let i = 0, len = nums.length; i < len;) {
    let curr = nums[i];
    while (stack.length > 0 && curr > nums[stack[stack.length - 1]]) {
      let last = stack.pop();
      if (!map.has(last)) {
        map.set(last, curr);
      }
    }
    stack.push(i);

    if (i === len - 1 && loop < 1) {
      i = 0;
      loop++;
    }
    else {
      i++;
    }
  }

  while (stack.length > 0) {
    let last = stack.pop();
    if (!map.has(last)) {
      map.set(last, -1);
    }
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    ans.push(map.get(i));
  }

  return ans;
};