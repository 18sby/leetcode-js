/**
 * @param {string} S
 * @return {string}
 */

/*
  思路：
  1.把所有字符串出现的次数统计到 map 中
  2.正序排序放到数组里，每一项结构为
  {
    count: 3,
    letter: 'a'
  }
  3.判断：如果最多出现次数的字符串大于 S 长度的一半，那么必然会出现相邻字符，直接返回 '' 即可
  4.否则构建字符串，返回即可
    - 将出现最多的字符串直接构建为一个字符串，如：'aaaaaaaa'
    - 依次遍历，将剩余的所有字符，插缝放到 'aaaaaaaa' 字符串中。。。
*/
var reorganizeString = function (S) {
  if (S === '') return S;

  let map = new Map(),
    arr = [],
    ans = '';

  for (let i = 0, len = S.length; i < len; i++) {
    if (!map.has(S[i])) {
      map.set(S[i], 1);
    } else {
      map.set(S[i], map.get(S[i]) + 1);
    }
  }

  map.forEach((v, k) => {
    arr.push({ letter: k, count: v });
  });

  if (arr.length === 1 && arr[0].count > 1) return '';

  arr.sort((a, b) => {
    return b.count - a.count;
  });

  let big = arr.shift();

  if (big.count > Math.ceil(S.length / 2)) return '';

  while (big.count > 0) {
    ans += big.letter;
    big.count--;
  }

  let i = 1;
  while (arr.length > 0) {
    let curr = arr.shift();
    while (curr.count > 0) {
      if (i > ans.length) {
        i = 1;
      }
      ans = ans.slice(0, i) + curr.letter + ans.slice(i);
      i = i + 2;
      curr.count--;
    }
  }

  return ans;
};