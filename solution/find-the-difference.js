/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let map = new Map();

  for (let v of s) {
    if (!map.has(v)) {
      map.set(v, 1);
    }
    else {
      map.set(v, map.get(v) + 1);
    }
  }

  for (let v of t) {
    if (!map.has(v)) {
      return v;
    }

    if (map.get(v) > 1) {
      map.set(v, map.get(v) - 1);
    }
    else {
      map.delete(v);
    }
  }
};