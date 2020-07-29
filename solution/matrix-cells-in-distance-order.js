/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  let ans = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      ans.push([i, j])
    }
  }

  ans.sort((a, b) => {
    return (Math.abs(a[0] - r0) + Math.abs(a[1] - c0)) - (Math.abs(b[0] - r0) + Math.abs(b[1] - c0));
  });

  return ans;
};