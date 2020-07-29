/**
 * @param {number[]} A
 * @return {number[]}
 */

/*
  双指针：
  不对的情况：奇数索引 - 值是偶数 odd
            偶数索引 - 值是奇数 even
*/
var sortArrayByParityII = function (A) {
  let len = A.length,
    left = 0,
    errOdd = [],
    errEven = [];

  while (left < len) {
    while ((left % 2 === 0 && A[left] % 2 === 0) || (left % 2 !== 0 && A[left] % 2 !== 0)) {
      left++;
    }

    if (left >= len) break;

    if (left % 2 === 0) {
      errEven.push(left);
    }
    else {
      errOdd.push(left);
    }
    left++;
  }

  while (errOdd.length > 0) {
    let odd = errOdd.pop(),
      even = errEven.pop();

    let temp = A[odd];
    A[odd] = A[even];
    A[even] = temp;
  }

  return A;
};