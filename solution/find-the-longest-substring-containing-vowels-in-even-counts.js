/**
 * @param {string} s
 * @return {number}
 */

/*
  位压缩
*/
var findTheLongestSubstring = function (s) {
  let len = s.length;
  let map = { a: 1, e: 2, i: 4, o: 8, u: 16 };
  let record = new Array(32);
  let result = 0;
  let curr = 0;

  record[0] = -1;
  // console.log( '初始化 resord: ', record );
  for (let i = 0; i < len; i++) {
    curr ^= map[s.charAt(i)];
    // console.log( 'curr: ', curr, map, i );
    if (record[curr] === void 0) record[curr] = i;
    else result = Math.max(result, i - record[curr]);
  }

  return result;
};

/*
  以每个字符开始查找，对比找出最长的，终止条件注意下：
  一旦已找到的最长字符串已经大于「当前查找的起始位置到 s 的末尾」的长度，
  那么停止即可。
*/
var findTheLongestSubstring = function (s) {
  let map = null, max = 0, n = s.length;

  // 判断当前字符串是否合规
  const mapIsOk = obj => {
    let values = Object.values(obj);
    return values.every(item => item % 2 === 0);
  }

  for (let i = 0; i < Math.min(n, n - max); i++) {
    map = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let j = i; j < n; j++) {
      let c = s.charAt(j);
      if (map[c] !== undefined) map[c]++;
      if (mapIsOk(map)) max = Math.max(j - i + 1, max);
    }
  }

  return max;
};