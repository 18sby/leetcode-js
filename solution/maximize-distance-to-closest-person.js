/**
 * @param {number[]} seats
 * @return {number}
 */

/*
  类似 BFS
  思路：
  从每一个空座位出发，向左右两边走，只要有其中一边遇到人了，
  那么拿当前走的最大距离和已保存的最大距离比较。
*/
var maxDistToClosest = function (seats) {
  let ans = 0,
    n = seats.length;

  for (let i = 0; i < n; i++) {
    if (seats[i] === 0) {
      let count = 1,
        l = i - 1,
        r = i + 1;

      while (seats[l] !== 1 && seats[r] !== 1) {
        if (seats[l] === undefined && seats[r] === undefined) break;
        count++;
        l--;
        r++;
      }

      ans = Math.max(ans, count);
    }
  }

  return ans;
};