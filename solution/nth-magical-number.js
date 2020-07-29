/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */

/*
  二分查找到区间里面刚好只有 N 个数为神奇数字的区间，返回第 N 个即可
*/
var nthMagicalNumber = function (N, A, B) {
  let low = 0,
    high = 1e15;

  let gcd = (x, y) => {
    if (x == 0) return y;
    return gcd(y % x, x);
  }

  const L = A / gcd(A, B) * B;

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (Math.trunc(mid / A) + Math.trunc(mid / B) - Math.trunc(mid / L) < N) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low % 1000000007;
};