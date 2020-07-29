/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let arr = [], ans = '', total = s.length,
    map = {};

  for (let i = 0; i < total; i++) {
    let c = s.charAt(i);
    if (map[c] === undefined) map[c] = 0;
    map[c]++;
  }

  while (ans.length < total) {
    for (let i = 97; i <= 122; i++) {
      let c = String.fromCharCode(i);
      if (map[c]) {
        ans += c;
        map[c]--;
      }
    }
    for (let i = 122; i >= 97; i--) {
      let c = String.fromCharCode(i);
      if (map[c]) {
        ans += c;
        map[c]--;
      }
    }
  }

  return ans;
};