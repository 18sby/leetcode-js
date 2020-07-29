/**
 * @param {number} n
 * @return {boolean}
 */

/*
  1. n 和 n >> 1 进行 ^ 操作，赋值给 n
        1 0 1
        0 1 0
      = 1 1 1
      
  2. n & n + 1 === 0
        1 1 1
      1 0 0 0
    = 0 0 0 0
    
  总结：如果是交替二进制数，那么这两步运算一定为 0
*/
var hasAlternatingBits = function (n) {
  n = n ^ (n >> 1);
  return (n & (n + 1)) === 0;
};