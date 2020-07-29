/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return /^10*$/.test(n.toString(3));
};