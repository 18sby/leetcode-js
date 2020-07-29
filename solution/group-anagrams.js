/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 使用map存储，最终把所有结果放到一个数组中
var groupAnagrams = function (strs) {
  let strMap = new Map(),
    strAry = [];

  for (let str of strs) {
    let strSort = str.split('').sort().join('');
    if (strMap.has(strSort)) {
      strMap.get(strSort).push(str);
    }
    else {
      strMap.set(strSort, [str]);
    }
  }

  strMap.forEach((item, key) => {
    strAry.push(item);
  });
  return strAry;
};

