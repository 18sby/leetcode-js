/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

/*
  举例：计算 x^77 可以递归这样来计算

   x^77 = x^38 * x^38 * x^1 => 38 + 38 + 1 = 77

   x^38 = x^19 * x^19       => 19 + 19 = 38

   x^19 = x^9 * x^9 * x^1   => 9 + 9 + 1 = 19

   x^9  = x^4 * x^4 * x^1   => 4 + 4 + 1 = 9

   x^4  = x^2 * x^2         => 2 + 2 = 4

   x^2  = x^1 * x^1         => 1 + 1 = 2

  可以看出最后是否再乘上一个 x 决定于此时的 n 为奇数还是偶数
  这样的话，每次把 n 的规模缩小一半，相对于直接乘 77 个 x，
  复杂度从 O(N) => o(logN) 快了很多
*/
var myPow = function (x, n) {
  if (n >= 0) return quickPow(x, n);
  return 1 / quickPow(x, -n);
};

function quickPow(x, n) {
  if (n === 0) return 1;
  let y = quickPow(x, Math.floor(n / 2));
  return n % 2 === 0 ? y * y : y * y * x;
}