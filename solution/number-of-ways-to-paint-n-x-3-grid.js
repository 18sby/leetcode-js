/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function (n) {
  let aba = 6,
    abc = 6,
    mould = 1e9 + 7;

  while (n > 1) {
    n--;
    let temp = aba;
    aba = (abc * 2 + aba * 3) % mould;
    abc = (abc * 2 + temp * 2) % mould;
  }

  return (abc + aba) % mould;
};