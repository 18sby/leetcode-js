/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// 参考 aymond-yan
var fourSum = function (nums, target) {
  if (nums.length < 4) { return [] };
  nums.sort((a, b) => a - b);
  const result = []
  for (let i = 0, len = nums.length - 3; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) { continue; };
    if ((nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]) > target) { break; };
    for (let j = i + 1, len = nums.length - 2; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) { continue; };
      let L = j + 1, R = nums.length - 1;
      while (L < R) {
        const sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[L], nums[R]]);
        }
        if (sum <= target) {
          while (nums[L] === nums[++L]);
        } else {
          while (nums[R] === nums[--R]);
        }
      }
    }
  }
  return result
}
fourSum([-5, -4, -3, -2, -1, 0, 0, 1, 2, 3, 4, 5], 0);

// 思路：( 又超出时间限制了!! )
//  1.从小到大排序
//  2.两个两数和等于四数和
//  3.随机组合任意两个数 存成对象的形式 { 索引字符串: 两个数的数组 }
//  4.遍历所有对象找出符合条件的对象 判断这四个数 和 临时数组（此索引字符串为上次符合情况的最后一组索引）是否相同，
//    要比较四个值是否相同，因为有可能索引不同而值相同
//    如果不重复，那就存进来，这样做的好处是：每次找到符合条件的情况时只需对比一次即可，不需要去遍历所有的已有情况进行比较
var fourSum = function (nums, target) {
  let allNums = nums.sort((a, b) => a - b);
  let fourNumArr = [];
  let temp = []; // 存字符串判断是否相等

  let twoNumObj = {};
  for (let i = 0, len = allNums.length - 1; i < len; i++) {
    for (let j = i + 1, len = allNums.length; j < len; j++) {
      twoNumObj['' + i + '#' + j] = [allNums[i], allNums[j]]
    }
  }

  let keyArr = Object.keys(twoNumObj);
  for (let a = 0, len = keyArr.length - 1; a < len; a++) {
    for (let b = a + 1, len = keyArr.length; b < len; b++) {
      // 先判断两组索引是否重复
      let spb = keyArr[b].indexOf('#');
      let spa = keyArr[a].indexOf('#');
      let al = keyArr[a].slice(0, spa),
        ar = keyArr[a].slice(spa + 1),
        bl = keyArr[b].slice(0, spb),
        br = keyArr[b].slice(spb + 1);
      if (keyArr[a].indexOf(bl) > -1 || keyArr[a].indexOf(br) > -1) {
        continue;
      }
      // 判断是否等于target
      let sum = allNums[al] + allNums[ar] + allNums[bl] + allNums[br];
      if (sum !== target) {
        continue;
      }
      // 如果等于target，那么将这四个数进行排序转换为字符串判断是否存在已有数组里面，没有就存进去
      let cur = [allNums[al], allNums[ar], allNums[bl], allNums[br]].sort((a, b) => a - b);
      let curStr = cur.join('');
      if (temp.indexOf(curStr) === -1) {
        fourNumArr.push(cur);
        temp.push(curStr)
      }
    }
  }
  return fourNumArr;

};
fourSum([-5, -4, -3, -2, -1, 0, 0, 1, 2, 3, 4, 5], 0);