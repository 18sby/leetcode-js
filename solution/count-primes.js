/**
 * @param {number} n
 * @return {number}
 */

/*
  高效找素数的个数，把不是素数的排除掉
*/
var countPrimes = function (n) {
  let arr = [], count = 0;

  for (let i = 1; i < n; i++) {
    arr[i] = i;
  }
  arr[1] = null;

  for (let i = 2; i < n; i++) {
    if (i === null) continue;
    for (let j = 2; j * i < n; j++) {
      arr[j * i] = null;
    }
  }

  for (let i = 2; i < n; i++) {
    if (arr[i]) count++;
  }

  return count;
}

/*
  定然超时
  笨方法：一个一个遍历，是质数，就统计
*/
var countPrimes = function (n) {
  let count = 0;

  function isPrimeNumber(num) {
    let flag = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  for (let i = 2; i < n; i++) {
    if (isPrimeNumber(i)) count++;
  }

  return count;
};