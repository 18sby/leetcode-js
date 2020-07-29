/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// 直接根据k所在的阶乘区间 无限剪枝
var getPermutation = function (n, k) {
  let every = 1,
    result = '',
    numsAry = [];

  for (let i = n - 1; i >= 1; i--) {
    every = every * i;
  }

  for (let t = 1; t <= n; t++) {
    numsAry.push(t);
  }

  while (result.length < n) {
    let remaind = k % every,
      quotient = Math.floor(k / every);
    k = remaind;
    if (remaind === 0) {
      let pos = quotient === 0 ? numsAry.length - 1 : quotient - 1;
      result += numsAry[pos];
      numsAry.splice(pos, 1);
    }
    else {
      result += numsAry[quotient];
      numsAry.splice(quotient, 1);
    }
    every = every / numsAry.length;
  }
  return result;
};