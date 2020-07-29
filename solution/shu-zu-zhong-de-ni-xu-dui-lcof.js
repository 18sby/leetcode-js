/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  求每个数字的右侧比他小的数字有几个
  归并排序的“并”过程来统计
  一旦拿的是右边数组的元素，那么左侧数组的所有元素都比当前拿的元素要小，
  统计一下左侧元素剩余的个数，累计
*/
var reversePairs = function (nums) {
  function merge(arr) {
    if (arr.length < 2) return arr;
    let mid = (arr.length >> 1);
    return mergeSort(merge(arr.slice(0, mid)), merge(arr.slice(mid)));
  }

  function mergeSort(left, right) {
    let newArr = [];
    let leftIndex = 0, rightIndex = 0,
      leftLen = left.length,
      rightLen = right.length;

    while (leftIndex < leftLen || rightIndex < rightLen) {
      let l = leftIndex >= leftLen ? Infinity : left[leftIndex],
        r = rightIndex >= rightLen ? Infinity : right[rightIndex];
      if (r < l) {
        count += (leftLen - leftIndex);
        newArr.push(r);
        rightIndex += 1;
      } else {
        newArr.push(l);
        leftIndex += 1;
      }
    }

    return newArr;
  }

  let count = 0;
  let newNums = merge(nums);
  return count;
};