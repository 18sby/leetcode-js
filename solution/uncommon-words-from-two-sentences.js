/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

var uncommonFromSentences = function (A, B) {
  let C = [...A.split(' '), ...B.split(' ')],
    map = new Map(),
    ans = [];

  for (let i = 0, len = C.length; i < len; i++) {
    if (!map.has(C[i])) {
      map.set(C[i], 1);
    }
    else {
      map.set(C[i], map.get(C[i]) + 1);
    }
  }

  map.forEach((k, v) => {
    if (k === 1) {
      ans.push(v);
    }
  })

  return ans;
};