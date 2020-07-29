/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let sum = 0, ratio = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    let c = s.charAt(i);
    let curr = (c.charCodeAt() - 64) * ratio;
    sum += curr;
    ratio *= 26;
  }

  return sum;
};