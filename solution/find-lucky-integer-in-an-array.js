/**
 * @param {number[]} arr
 * @return {number}
 */

/*
  倒序排序，把统计到的第一个幸运数返回，如果没有幸运数，返回-1
*/
var findLucky = function (arr) {
  arr.sort((a, b) => b - a);
  let target = null, count = 0;

  for (let i = 0; i < arr.length; i++) {
    let c = arr[i];
    if (target === c) {
      count++;
    } else {
      if (target === null) {
        target = c;
        count++;
      } else {
        if (count === target) {
          break;
        } else {
          target = c;
          count = 1;
        }
      }
    }
  }

  if (count === target) {
    target = count;
  } else {
    target = -1;
  }

  return target;
};