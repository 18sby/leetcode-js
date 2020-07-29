/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

/*
  思路：
  1.将所有行转换为一个二维数组 [ [1,2] ] [ [行数，军人数] ]
  2.正序排序，先依赖军人数，如果军人数，依赖行数
*/
var kWeakestRows = function (mat, k) {
  let arr = [], ans = [];

  for (let i = 0, len = mat.length; i < len; i++) {
    let row = mat[i], soldier = 0;
    for (let j = 0, max = row.length; j < max; j++) {
      if (row[j] === 1) soldier++;
      if (row[j] === 0) break;
    }

    // 对 arr 进行插入排序：先对比军人数，在对比索引 [i, soldier]
    let n = arr.length - 1;
    while (n >= 0 && (arr[n][1] > soldier || (arr[n][1] === soldier && arr[n][0] > i))) {
      arr[n + 1] = arr[n];
      n--;
    }
    arr[n + 1] = [i, soldier];
  }

  while (k > 0) {
    let curr = arr.shift();
    ans.push(curr[0]);
    k--;
  }

  return ans;
};