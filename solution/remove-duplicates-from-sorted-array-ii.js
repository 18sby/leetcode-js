/**
 * @param {number[]} nums
 * @return {number}
 */

/* 参考作者 user3026 */
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (i > 1 && nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
    }
    else {
      i++;
    }
  }
  setTimeout(() => { return nums; });
}

/*
  动态规划
  先做容错处理
  1.使用一个额外存储变量 tmp
  2.在循环之前先把第一个数加到额外存储 tmp中
  3.循环数组:
    ①当前数等于上一个数
      1.(tmp === 1) => tmp++
      2.(tmp === 2) => 清除当前数 i--
    ②当前数不等于上一个数
      1.tmp = 1
*/
var removeDuplicates = function (nums) {
  let tmp = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      if (tmp === 1) {
        tmp++;
      }
      else if (tmp === 2) {
        nums.splice(i, 1);
        i--;
      }
    }
    else {
      tmp = 1;
    }
  }

  setTimeout(() => { return nums; });
};