/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

/*
  统计每个元素出现的个数，优先移除最少的
*/
var findLeastNumOfUniqueInts = function (arr, k) {
  let map = {}, len = arr.length;
  for (let i = 0; i < len; i++) {
    let curr = arr[i];
    if (map[curr] === undefined) {
      map[curr] = 0;
    }
    map[curr]++;
  }

  let freqs = Object.values(map);
  freqs.sort((x, y) => x - y);
  let count = freqs.length, index = 0;
  while (k > 0) {
    let offer = freqs[index];
    if (offer <= k) {
      k -= offer;
      count--;
    } else {
      k = -1;
    }
    index++;
  }

  return count;
};