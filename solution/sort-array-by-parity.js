/**
 * @param {number[]} A
 * @return {number[]}
 */

/*
  双指针
  左指针找奇数，右指针找偶数，对换位置，直到指针相遇
*/
var sortArrayByParity = function (A) {
  let left = 0, right = A.length - 1;

  while (left < right) {
    while (left < right && A[left] % 2 === 0) left++;
    while (left < right && A[right] % 2 !== 0) right--;

    [A[left], A[right]] = [A[right], A[left]];
  }

  return A;
};