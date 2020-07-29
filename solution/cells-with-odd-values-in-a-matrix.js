/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */

/*
  思路：
  
  这道题的本质是：
  
  初始化的时候没有奇数的格子，每当某个格子被操作一次，他就变化了一次奇偶性，
  一遍填充格子一遍统计当前的奇数格子个数，我们在填充格子的时候，不需要一直向上加，
  只需要变换 0 1 两个值变换奇偶即可
*/
var oddCells = function (n, m, indices) {
  let ans = 0, rect = [];

  for (let i = 0; i < n; i++) {
    rect[i] = [];
    for (let j = 0; j < m; j++) {
      rect[i][j] = 0;
    }
  }

  for (let i = 0; i < indices.length; i++) {
    let [row, col] = indices[i];
    for (let j = 0; j < m; j++) {
      if (rect[row][j] === 0) {
        ans++;
        rect[row][j] = 1;
      } else {
        ans--;
        rect[row][j] = 0;
      }
    }

    for (let k = 0; k < n; k++) {
      if (rect[k][col] === 0) {
        ans++;
        rect[k][col] = 1;
      } else {
        ans--;
        rect[k][col] = 0;
      }
    }
  }

  return ans;
};