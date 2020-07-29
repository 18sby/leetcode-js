/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

/*
  思路：
  遍历一遍找出位置和数字都对的数字，
  将 secret 中未被猜中的数字放到 map 中，
  将 guess 中未猜到正确位置和数字的字符放到集合里
  判断集合里有几个和 map 中相等的字符，这个数量即为数字对，但位置不对的字符数
*/
var getHint = function (secret, guess) {
  let bull = 0, cow = 0, map = new Map(), restGuess = '';

  for (let i = 0, len = secret.length; i < len; i++) {
    let s = secret.charAt(i), g = guess.charAt(i)
    if (s === g) {
      bull++;
    } else {
      if (!map.has(s)) {
        map.set(s, 1);
      } else {
        map.set(s, map.get(s) + 1);
      }
      restGuess += g;
    }
  }

  for (let i = 0, len = restGuess.length; i < len; i++) {
    let g = restGuess.charAt(i);
    if (map.has(g) && map.get(g) > 0) {
      map.set(g, map.get(g) - 1);
      cow++;
    }
  }

  return bull + 'A' + cow + 'B';
};