/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  // 1.一个 map 结构存储 pattern 的不重复字符，一个 map 存储 str 的键值对
  let arr = [];
  let mapTemp = new Map(),
    map = new Map(),
    ans = '';
  str = str.split(' ');

  // 2.before 把 pattern 的不重复值保存到 arr 中
  for (let i = 0, len = pattern.length; i < len; i++) {
    if (!mapTemp.has(pattern[i])) {
      mapTemp.set(pattern[i], 1);
      arr.push(pattern[i]);
    }
  }
  // console.log( '转为数组', arr );

  // 2.按照 map 将 str 转换为 pattern 格式的字符串进行对比，
  //   如果 map 中找不到 当前单词的 键值对，那么拿出来一个 pattern 中的
  //   不重复规则字符串 跟这个单词组成键值对 存到 map 中
  for (let i = 0, len = str.length; i < len; i++) {
    if (!map.has(str[i])) {
      let curr = arr.shift();
      if (curr === undefined) {
        ans += 'undefiend';
        break;
      }
      map.set(str[i], curr);
      ans += curr;
    }
    else {
      ans += map.get(str[i]);
    }
  }

  return ans === pattern;

  // 2.1 转换过程中如果遇到 arr 数组为空的情况 那么直接返回 false

};