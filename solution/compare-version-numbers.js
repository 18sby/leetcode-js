/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

/*
  1. 从大版本到小版本，每个位对应去比较，不足补 0
  2. 如果每个版本号都一样，最后返回 0
*/
var compareVersion = function (version1, version2) {
  let arr1 = version1.split('.'),
    arr2 = version2.split('.');

  for (let i = 0; i < 4; i++) {
    arr1[i] = arr1[i] === undefined ? 0 : parseInt(arr1[i]);
    arr2[i] = arr2[i] === undefined ? 0 : parseInt(arr2[i]);
    if (arr1[i] > arr2[i]) return 1;
    if (arr1[i] < arr2[i]) return -1;
  }
  return 0;
};