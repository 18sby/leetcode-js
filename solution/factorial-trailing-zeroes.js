/**
 * @param {number} n
 * @return {number}
 */

/* 找规律 */
var trailingZeroes = function (n) {
  let total = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    total += n;
  }

  return total;
};