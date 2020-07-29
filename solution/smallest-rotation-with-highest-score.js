/**
 * @param {number[]} A
 * @return {number}
 */

/*
  高效的方法
*/
var bestRotation = function (A) {
  let len = A.length;
  let max = -Infinity;

  // 求出对应 K 值的分数减少的数值
  let change = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    change[(i - A[i] + 1 + len) % len] -= 1;
    // console.log( `change[${i}]: `, change[i] );
  }

  // 找到最大分值对应的索引
  let maxIndex = 0, score = 0, maxScore = score;
  for (let i = 1; i < len; i++) {
    let nextScore = score + change[i] + 1;
    if (nextScore = score + change[i] + 1);
    if (nextScore > maxScore) {
      maxScore = nextScore;
      maxIndex = i;
    }
    score = nextScore;
  }

  return maxIndex;
};

/*
  7000ms
  暴力，最多轮调 A.length 次，对比每一次
  
  可优化点：可以不用真的改变数组，或者创建一个新数组，将索引 + 轮调的次数就是
  轮调后所对应的索引
*/
var bestRotation = function (A) {
  let n = A.length, map = {}, i = 0, max = 0;

  while (i < n) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      let c = A[j], index = j - i;
      if (index < 0) {
        index = n - (-index);
      }
      if (c <= index) count++;
    }

    max = Math.max(count, max);
    map[i] = count;
    i++;
  }

  const keys = Object.keys(map);
  // console.log( 'map: ', map );

  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] === max) return keys[i];
  }
};