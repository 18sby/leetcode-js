/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let large = Number('9'.repeat(n));
  return new Array(large).fill(1).map((val, index) => index + 1)
};