/**
 * @param {number[][]} grid
 * @return {number}
 */

var cherryPickup = function (grid) {
  let dp = [],
    n = grid.length,
    steps = 2 * n - 1;

  for (let step = 1; step <= steps; step++) {
    for (let i = n - 1; i >= 0; i--) {
      for (let p = n - 1; p >= 0; p--) {
        let j = n - i, q = n - p;
        if (j < 0 || j >= n || q < 0 || q >= n || grid[i][j] < 0 || grid[p][q] < 0) {
          dp[i][p] = -1;
          continue;
        }

        if (i > 0) 
      }
    }
  }
}