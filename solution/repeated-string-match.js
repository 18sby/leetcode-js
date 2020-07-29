/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

/*
  思路：让 A 重复 n 次，直到超过 B 的长度，然后再重复 2 次
       如果此时 B 都不是 A 的子串，那么返回 -1
*/
var repeatedStringMatch = function (A, B) {
  let newA = '';

  let n = Math.ceil(B.length / A.length) + 2,
    start = 0;

  while (start < n) {
    start++;
    newA += A;
    if (newA.indexOf(B) > -1) {
      return start;
    }
  }

  return -1;
};