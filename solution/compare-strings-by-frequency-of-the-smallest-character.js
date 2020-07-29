/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

/*
  小优化暴力直观做法：
  1.queries 和 words 中每个元素的最小字母出现频次，原地更新其值
  2.两层循环，分别判断 queries 中每一项在 words 中可以找到的比自己大的个数
    - 此处操作进行优化：将 words 每个频率出现的次数统计起来，
      做成一个二维数组，优化比较的次数
      [[1,3], [2, 1]] 第一项即为：words 中最小字母频次为 1 的字符串出现 3 次
  
  - 封装一个查找一个字符串最小字母出现频次的方法
*/
var numSmallerByFrequency = function (queries, words) {
  let ans = [], map = new Map();

  // 两个数组的每一项都转为最小字母出现频次的次数
  for (let i = 0, len = queries.length; i < len; i++) {
    queries[i] = miniLetterRate(queries[i]);
  }
  for (let i = 0, len = words.length; i < len; i++) {
    words[i] = miniLetterRate(words[i]);
  }

  // 统计 words 相同频次的个数
  for (let i = 0, len = words.length; i < len; i++) {
    let c = words[i];
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }

  // map 转为数组，按照频次正序排列
  map = Array.from(map);
  map.sort((a, b) => a[0] - b[0]);

  // 对比 querie 的每一项在 words 中比它大的个数
  for (let i = 0, len = queries.length; i < len; i++) {
    let c = queries[i], count = 0;
    for (let j = 0, mLen = map.length; j < mLen; j++) {
      if (map[j][0] <= c) continue;
      count += map[j][1];
    }
    ans.push(count);
  }

  return ans;
};

function miniLetterRate(s) {
  if (s === '') return 0;

  s = s.split('');
  s.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });

  let count = 1;

  for (let i = 1, len = s.length; i < len; i++) {
    if (s[i] === s[0]) {
      count++;
    } else {
      break;
    }
  }

  return count;
}