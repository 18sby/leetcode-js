/**
 * @param {number} n
 * @return {number}
 */
// 递归，累加
var arrangeCoins = function (n) {
  function recursion(level, rest) {
    if (rest >= (level + 1)) {
      return recursion(level + 1, rest - level - 1);
    }
    else {
      return level;
    }
  }

  return recursion(0, n);
};

// 找规律
var arrangeCoins = function (n) {
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
}