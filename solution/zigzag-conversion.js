/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 感叹一下：前面5道题 没白学 这次自己的思路 击败 70% 的同学了

// 思路：
// 1.如果是行数为 3，就 4 个数存一组；
//   如果是行数为 4，就 6 个数存一组；
//   如果是行数为 n，就 2n-2 个数存一组；
//   按层级来存
// 2.利用二级数组存储字符串
// 3.根据规则拼接字符串
var convert = function (s, numRows) {
  if (s.length > numRows && numRows > 1) {
    let groupNums = 2 * numRows - 2; // 每组存的字符串个数
    let remainder = s.length % groupNums; // 余数
    let store = []; // 存储数据的二级数组
    let firstIdx = 0; // 第一级的索引
    store[firstIdx] = []; // 初始化第一个二级数组
    let outStr = '';

    for (let i = 0, len = s.length; i < len; i++) {
      if (i % groupNums === 0 && i !== 0) {
        firstIdx++;
        store[firstIdx] = [];
      }
      store[firstIdx].push(s[i])
    }
    if (remainder > 0 && s.length > groupNums) {
      let lastIndex = Math.floor(s.length / groupNums); // 第一级数组的最后索引
      for (let j = 0, len = groupNums - remainder; j < len; j++) {
        store[lastIndex - 1].push('')
      }
    }

    store.forEach(item => {
      outStr += item[0]
    })
    for (let k = 0, len = numRows - 2; k < len; k++) {
      store.forEach(item => {
        if (item[k + 1]) {
          outStr += item[k + 1]
        }
        if (item[groupNums - k - 1]) {
          outStr += item[groupNums - k - 1]
        }
      })
    }
    store.forEach(item => {
      if (item[numRows - 1]) {
        outStr += item[numRows - 1]
      }
    })
    return outStr
  } else {
    return s
  }
};

convert('LEETCODEISHIRING', 4)