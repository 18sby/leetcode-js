/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let map = new Map(), ans = true; // order: 1 - 26
  map.set(undefined, 0);
  for (let i = 1, len = order.length; i < len; i++) {
    map.set(order[i], i);
  }

  out: for (let i = 0, len = words.length; i < len - 1; i++) {
    let prev = words[i],
      curr = words[i + 1],
      l = Math.max(prev.length, curr.length);

    for (let j = 0; j < l; j++) {
      let p = map.get(prev[j]),
        c = map.get(curr[j]);

      if (p > c) {
        ans = false;
        break out;
      }
      if (p < c) {
        break;
      }
    }
  }

  return ans;
};