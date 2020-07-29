/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/*
  一遍存储前缀和，一边存储同余情况的出现次数
*/
var subarraysDivByK = function (A, K) {
  if (A.length === 0) return 0;
  let len = A.length, map = {}, sum = 0, count = 0;

  for (let i = 0; i < len; i++) {
    sum += A[i];
    let key = (sum % K + K) % K;
    if (map[key] === undefined) map[key] = 0;
    map[key]++;
  }

  count = map[0] === undefined ? 0 : map[0];
  for (let val of Object.values(map)) {
    if (val > 1) count += (val * (val - 1)) >> 1;
  }

  return count;
};