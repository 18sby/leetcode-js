/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let ans = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0, j = 0, glen = g.length, slen = s.length;
  while (i < glen && j < slen) {
    if (g[i] <= s[j]) {
      i++;
      j++;
      ans++;
    }
    else {
      j++;
    }
  }

  return ans;
};