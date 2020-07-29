/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

/*
  思路：
  1.找到 A 和 B 所有可能的组合 存到 map1 中
  2.遍历 C 和 D 数组，对所有可能的和 c + d 取负值 -(c + d)， 查找是否在 map1
    中存在 和为 c + d 的组合，存在，就把存在的数量加上
*/
var fourSumCount = function (A, B, C, D) {
  let map1 = new Map(),
    ans = 0,
    n = A.length;

  for (let i = 0; i < n; i++) {
    let a = A[i];
    for (let j = 0; j < n; j++) {
      let b = B[j];
      if (!map1.has(a + b)) {
        map1.set(a + b, 1);
      } else {
        map1.set(a + b, map1.get(a + b) + 1);
      }
    }
  }

  for (let k = 0; k < n; k++) {
    let c = C[k];
    for (let l = 0; l < n; l++) {
      let d = D[l];
      let sum = -(c + d);
      if (map1.has(sum)) {
        ans += map1.get(sum);
      }
    }
  }

  return ans;
};