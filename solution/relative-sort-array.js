/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

/*
  1.copy 一个 arr2数组，用来判断 arr1 中的元素是否存在于 arr2 中
  2.建立一个 map，主要用来判断是否这个存在于 arr2 中的元素只是第一次出现，如果是第一次出现，不需要把它
    填入到 arr2 中，因为 arr2 中本来是有这个值的
  3.遍历 arr1，把在 arr2 中出现的元素放到arr2中相同元素的后面
  4.对此时的 arr1 进行快排
  5.在 arr2 后面 拼接 arr1
*/
var relativeSortArray = function (arr1, arr2) {
  let map = new Map(), arr2Copy = [];
  for (let i = 0, len = arr2.length; i < len; i++) {
    arr2Copy.push(arr2[i]);
    map.set(arr2[i], 1);
  }

  for (let i = 0, len = arr1.length; i < len; i++) {
    let inArr2Index = arr2Copy.indexOf(arr1[i]);
    if (inArr2Index > -1) {
      if (map.has(arr1[i])) {
        map.delete(arr1[i]);
      }
      else {
        arr2.splice(inArr2Index, 0, arr1[i]);
      }
      arr1.splice(i, 1);
      i--;
    }
  }

  arr1.sort((a, b) => a - b);

  return [...arr2, ...arr1];
};