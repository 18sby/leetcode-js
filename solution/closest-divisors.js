/**
 * @param {number} num
 * @return {number[]}
 */

/*
  暴力法：尝试 num + 1，num + 2 的所有成对因子，找到相差最小的
  注意：因子最大只需要尝试到 n的开平方 就可以了
*/
var closestDivisors = function (num) {
  let ans = [], minus = Infinity;

  for (let i = 1; i <= Math.sqrt(num + 1); i++) {
    if ((num + 1) % i === 0) {
      let j = (num + 1) / i;
      if (Math.abs(i - j) < minus) {
        ans = [i, j];
        minus = Math.abs(i - j);
      }
    }
  }

  for (let i = 1; i <= Math.sqrt(num + 2); i++) {
    if ((num + 2) % i === 0) {
      let j = (num + 2) / i;
      if (Math.abs(i - j) < minus) {
        ans = [i, j];
        minus = Math.abs(i - j);
      }
    }
  }

  return ans;
};