/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  let m = mat.length,
    n = mat[0].length,
    count = 0;

  let left = new Array(m).fill(1).map(_ => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    let now = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 1) {
        now++;
        left[i][j] = now;
      } else {
        now = 0;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let min = Infinity;
      for (let k = i; k >= 0; k--) {
        min = Math.min(min, left[k][j]);
        count += min;
      }
    }
  }

  return count;
};