/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */

var addToArrayForm = function (A, K) {
  if (!K) return A;

  K = String(K).split('');
  let index = A.length - 1, carry = 0;
  while (K.length > 0 || carry > 0) {
    let k = K.length > 0 ? Number(K.pop()) : 0;
    if (index === -1) {
      A.unshift(0);
      index++;
    }

    let sum = k + A[index] + carry;
    if (sum > 9) {
      sum = String(sum);
      carry = Number(sum.slice(0, sum.length - 1));
      sum = Number(sum[sum.length - 1]);
    }
    else {
      carry = 0;
    }

    A[index] = sum;
    index--;
  }

  if (carry !== 0) {
    A.unshift(carry);
  }

  return A;
};