/**
 * @param {number[]} arr
 * @return {number}
 */

/*
  先计算所有情况的异或结果，然后放到 map 中，最后直接取结果判断即可
*/
var countTriplets = function (arr) {
  let map = new Map(), len = arr.length, count = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (map.has(`${i}-${j - 1}`)) {
        map.set(`${i}-${j}`, map.get(`${i}-${j - 1}`) ^ arr[j]);
        continue;
      }

      let curr = arr[i];
      for (let start = i + 1; start <= j; start++) {
        curr ^= arr[start];
      }
      map.set(`${i}-${j}`, curr);
    }
  }

  for (let k = 1; k < len; k++) {
    for (let j = 1; j <= k; j++) {
      for (let i = 0; i < j; i++) {
        let a = map.get(`${i}-${j - 1}`),
          b = map.get(`${j}-${k}`);
        if (a == b) count++;
      }
    }
  }

  return count;
};