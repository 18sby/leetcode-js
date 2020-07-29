/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  直观思路：只要在每一行遇到了负数，那么从他往后都是负数
*/
var countNegatives = function (grid) {
  let rowLimit = grid.length,
    ans = 0;

  for (let i = 0; i < rowLimit; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] < 0) {
        ans += row.length - j;
        break;
      }
    }
  }

  return ans;
};