/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 1.双循环暴力操作 */
let twoSum = function (nums, target) {
  let result = [];

  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = 0, len = nums.length; j < len; j++) {
      if ((nums[i] + nums[j] === target) && i !== j) {
        result = [i, j];
      }
    }
  }
  return result;

};
let final = twoSum([3, 2, 3], 6);
console.log(final);

/* 2.使用map函数解题（参考本题javascript热度第一的思路） */
let twoSum = function (nums, target) {
  let result = [];
  let material = new Map();

  for (let idx in nums) {
    material.set(nums[idx], idx);
  };

  for (let i = 0, len = nums.length; i < len - 1; i++) {
    if (material.has(target - nums[i]) && (material.get(target - nums[i]) != i)) {
      result = [i, material.get(target - nums[i])];
      return result;
    }
  }
}
let final = twoSum([3, 2, 3], 6);
console.log(final);

/* 3.边存边比较（参考本题javascript热度第一的解题思路） */
let twoSum = function (nums, target) {
  obj = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    if (obj[target - nums[i]] >= 0) {
      return [obj[target - nums[i]], i]
    }
    obj[nums[i]] = i;
  }
}
let final = twoSum([2, 7, 11, 15], 9);
console.log(final);

/* 4.将第三种方法进行尾递归优化（参考本题javascript热度第一的解题思路） */
let twoSum = function (nums, target, i = 0, objs = {}) {
  let obj = objs;
  if (obj[target - nums[i]] >= 0) {
    return [obj[target - nums[i]], i]
  } else {
    obj[nums[i]] = i;
    i++;
    if (i < nums.length) {
      return twoSum(nums, target, i, obj)
    }
  }
}
let final = twoSum([3, 2, 4], 6);
console.log(final);
