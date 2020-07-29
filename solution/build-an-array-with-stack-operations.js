/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

var buildArray = function (target, n) {
  let ans = [], j = 1, i = 0;

  while (i < target.length) {
    if (j > n) break;

    let c = target[i];
    if (c === j) {
      ans.push('Push');
      i++;
    } else {
      ans.push('Push', 'Pop');
    }

    j++;
  }

  return ans;
};