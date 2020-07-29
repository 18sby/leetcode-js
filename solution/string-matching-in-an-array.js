/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let n = words.length, ans = new Set();

  for (let i = 0; i < n; i++) {
    let left = words[i];
    for (let j = i + 1; j < n; j++) {
      let curr = words[j];
      if (curr.indexOf(left) !== -1) ans.add(left);
      if (left.indexOf(curr) !== -1) ans.add(curr);
    }
  }

  return [...ans];
};