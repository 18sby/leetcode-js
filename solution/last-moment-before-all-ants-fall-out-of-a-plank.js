/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */

/*
  蚂蚁都一样，相撞即为穿过，所以只需要找到向右爬行的蚂蚁中起始位置距离终点最远的
  和向左爬行的蚂蚁中起始位置距离板子起点最远的距离，比较大的那个，返回即可
*/
var getLastMoment = function (n, left, right) {
  return Math.max(
    n - Math.min(...right), // 向右爬行距离最远的
    Math.max(...left) // 向左爬行距离最远的
  );
};

/*
  1068ms
  我还 BFS 模拟过程
*/
var getLastMoment = function (n, left, right) {
  let sec = 0;

  // 模拟蚂蚁爬行的过程
  while (true) {
    let l = left.length,
      r = right.length;

    for (let i = 0; i < l; i++) {
      left[i] -= 1;
      if (left[i] < 0) {
        left.splice(i, 1);
        i--;
        l--;
      }
    }

    for (let i = 0; i < r; i++) {
      right[i] += 1;
      if (right[i] > n) {
        right.splice(i, 1);
        i--;
        r--;
      }
    }

    if (left.length === 0 && right.length === 0) break;
    sec++;
  }

  return sec;
};