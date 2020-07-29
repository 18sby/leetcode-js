/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  if (s.length < 2) return s;

  let half = Math.floor(s.length / 2);
  for (let i = s.length - 1; i >= half; i--) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }

  return s;
};