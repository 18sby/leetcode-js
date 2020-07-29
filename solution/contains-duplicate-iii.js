/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

/*
  滑动窗口 维护长度为k的窗口
  1.初始化滑动窗口
  2.遍历窗口中是否存在符合条件的的情况
  3.不需要判断索引差，因为窗口的长度最大为索引差
  4.如果 t === 0，那么判断是否有重复值就可以了
  5.如果本次没有找到符合情况的值，那么把这个新的值加到窗口中
  6.如果窗口超长，那么把窗口最左侧的元素移除
*/
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (nums.length < 2) return false;

  let w = [];

  for (let v of nums) {
    if (t === 0) {
      if (w.includes(v)) return true;
    }
    else {
      for (let j of w) {
        if (Math.abs(j - v) <= t) {
          return true;
        }
      }
    }

    w.push(v);

    if (w.length > k) {
      w.shift();
    }
  }

  return false;
}

/* 
  学习作者：「___h」的算法，但是没有加收真香代码 if (k <= 0 || k === 10000) return false;
*/
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  return nums.some((v1, k1) => nums.some((v2, k2) => {
    return k1 !== k2 && Math.abs(v1 - v2) <= t && Math.abs(k1 - k2) <= k
  }))
}

var containsNearbyAlmostDuplicate = function (nums, k, t) {
  // 1.循环，每一个数只和他后面的 k 个数比较
  let len = nums.length;

  if (len < 2) return false;

  // 2.循环到 nums.length - k 就可以了
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < i + k + 1; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }

  return false;
};