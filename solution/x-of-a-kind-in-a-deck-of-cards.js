/**
 * @param {number[]} deck
 * @return {boolean}
 */

/*
  对不同数字的出现次数，求它们的最大公约数，是否大于等于2
*/
var hasGroupsSizeX = function (deck) {
  let map = {}, n = deck.length, ans = null;

  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b); // 求最大公约数

  for (let i = 0; i < n; i++) {
    let c = deck[i];
    if (map[c] === undefined) {
      map[c] = 1;
    } else {
      map[c]++;
    }
  }

  let keys = Object.keys(map);

  for (let k = 0; k < keys.length; k++) {
    let c = map[keys[k]];
    if (ans === null) {
      ans = c;
    } else {
      ans = gcd(ans, c);
    }
  }

  return ans >= 2;
};