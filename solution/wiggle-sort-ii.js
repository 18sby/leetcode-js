/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
  参考作者：hejiaoshou
  1.逆序排序
  2.从数组中位截掉后半段
  3.向 nums 间隔插数
*/
var wiggleSort = function (nums) {
  let len = nums.length;
  let suffix = nums.sort((a, b) => b - a).splice(Math.floor(len / 2));

  let p = 0;
  for (let i = 0, len = suffix.length; i < len; i++) {
    nums.splice(p, 0, suffix[i]);
    p += 2;
  }

  return nums;
};

/*
  正序排序 time over 8%, space over 9%
  找到中位数，左侧的数和右侧的数穿插插入数组
  [1,3,2,2,3,1,2] [1, 1, 2, 2, 2, 3, 3]
  [1,1,2,2,2,3,3]
  [1,1,2,2,2,3,3] [2211][332]
  [2,3,2,3,1,2,1]
  [4,5,5,6][5,4][6,5]
  [5,6,4,5]
  [1,1,2,2,3,3][211][332]
  [2,3,1,3,1,2]
  [1,1, 1,2,1,2,1, 2,2][11111][2222]
  [1,2,1,2,1,2,1,2,1]
  [1,3,2,2,3,1][211][332]
  [1, 2,3,1, 2,3]
*/
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);

  let len = nums.length;
  let mid = Math.floor((len - 1) / 2);
  for (let curr = mid, i = mid - 1, j = len - 1; i >= 0 || j > curr;) {
    if (j > curr) {
      if (j === curr + 1) {
        curr++;
      }
      else {
        nums.splice(curr + 1, 0, nums[j]);
        nums.splice(j + 1, 1);
        curr++;
      }
    }
    if (i >= 0) {
      nums.splice(curr + 1, 0, nums[i]);
      i--;
      nums.splice(i + 1, 1);
    }
  }

  return nums;
};