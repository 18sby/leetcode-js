/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// 偷个懒 先不深入理解使用 >> << 运算符了
var divide = function (dividend, divisor) {
  let n = 0,
    MIN = Math.pow(-2, 31),
    MAX = Math.pow(2, 31) - 1,
    status = null; // ±1：表示被除数和除数同号还是异号
  status = ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? 1 : -1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  n = Math.floor(dividend / divisor);
  n *= status;
  if (n > MAX) return MAX;
  if (n < MIN) return MIN;

  return n;
};

// 思路：遍历递减，减去1次，商加1
// !!! 超出时间限制
var divide = function (dividend, divisor) {
  let n = 0,
    MIN = Math.pow(-2, 31),
    MAX = Math.pow(2, 31) - 1,
    status = null; // ±1：表示被除数和除数同号还是异号
  status = ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? 1 : -1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (dividend >= divisor) {
    n++;
    dividend = dividend - divisor;
  };
  n = status > 0 ? n : -n;
  if (n > MAX) return MAX;
  if (n < MIN) return MIN;

  return n;
};