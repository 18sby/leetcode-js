/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/*
  n & (n - 1) 可以去掉末尾的1
  因为 n - 1 会借掉 n 的末位的 1
  
  举例说明：
  12: 1100   11: 1011
  
  12 & 11 = 1 1 0 0 
          & 1 0 1 1
            1 0 0 0
  
  '&': 对位都为 1 则结果为 1，否则为 0
  
*/
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    count++;
    n = n & (n - 1);
  }
  return count;
};