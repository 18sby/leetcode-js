/**
 * @param {number} n
 * @return {number[][]}
 */

/*
  与54差不多，只不过是根据人走路填数，54题是收集
*/
var generateMatrix = function (n) {
  let end = n * n,
    start = 1,
    start_x = 0,
    start_y = 0,
    limit_x = n,
    limit_y = n,
    result = [],
    direction = 'top';
  for (let k = 0; k < n; k++) {
    result.push([]);
  }
  var changeDirection = {
    top: function () {
      direction = 'right';
      for (let i = start_x; i < limit_x; i++) {
        result[start_y][i] = start;
        start = start + 1;
      }
      start_y++;
    },
    right: function () {
      direction = 'bottom';
      for (let i = start_y; i < limit_y; i++) {
        result[i][limit_x - 1] = start;
        start = start + 1;
      }
      limit_x--;
    },
    bottom: function () {
      direction = 'left';
      for (let i = limit_x - 1; i >= start_x; i--) {
        result[limit_y - 1][i] = start;
        start = start + 1;
      }
      limit_y--;
    },
    left: function () {
      direction = 'top';
      for (let i = limit_y - 1; i >= start_y; i--) {
        result[i][start_x] = start;
        start = start + 1;
      }
      start_x++;
    }
  };
  var backtrack = function () {
    if (start === end + 1) {
      return;
    }
    else {
      changeDirection[direction]();
      backtrack();
    }
  }
  backtrack();
  return result;
};




