/**
 * @param {number[]} rating
 * @return {number}
 */

/*
  以每一个数为结尾，查看所有组合是否能组成作战单位
*/
var numTeams = function (rating) {
  let count = 0, n = rating.length;

  for (let i = 2; i < n; i++) {
    for (let j = i - 1; j >= 1; j--) {
      for (let k = 0; k < j; k++) {
        if (
          (rating[i] > rating[j] && rating[j] > rating[k]) ||
          (rating[i] < rating[j] && rating[j] < rating[k])
        ) {
          count++;
        }
      }
    }
  }

  return count;
};