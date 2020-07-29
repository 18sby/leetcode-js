/**
 * @param {number[]} A
 * @return {boolean}
 */

/*
  1. 如果数组和不能被 3 整除，那肯定不能三等分
  2. 如果可以被 3 整除，那么双指针从两端向中间移动，找到两端的部分，剩下
     的就是中间的部分，判断是否合理即可。
*/
var canThreePartsEqualSum = function (A) {
  let n = A.length;

  let sum = A.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  if (sum % 3 !== 0) return false;

  let i = 0, value = sum / 3, curr = 0;

  while (i < n) {
    curr += A[i];
    if (curr === value) {
      break;
    }
    i++;
  }
  if (curr !== value) return false;

  let j = i + 1;
  curr = 0;
  while (j + 1 < n) {
    curr += A[j];
    if (curr === value) {
      break;
    }
    j++;
  }
  if (curr !== value) return false;

  let k = j + 1;
  curr = 0;
  for (let i = k; i < n; i++) {
    curr += A[i];
  }

  if (curr === value) return true;
  return false;

};