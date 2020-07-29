/**
 * @param {string[]} names
 * @return {string[]}
 */

/*
  1. 利用 hash 存储每个单词出现重复的时候可以使用的最小正整数，
    如果出现了重复的，那就拼上存储的这个最小正整数，同时更新这个单词的下一个
    最小正整数为这个数 + 1
  2. 但是要判断这个单词拼上最小正整数之后的单词是否已经出现过，如果出现过，
    正整数要不断的 +1 去判断，去找最小的正整数字拼上，使这个单词没有出现过才行
*/
var getFolderNames = function (names) {
  let map = {}, n = names.length, ans = [], mapName = {};

  for (let i = 0; i < n; i++) {
    let current = names[i], len = current.length;
    // 先找 mapName 是否有，没有，可以直接加入到  ans 中
    // 如果有，那么从 map 中拿出这个单词下一个可以尝试拼接的最小正整数
    // 如果重复，不断 +1 尝试，然后更新 mapName，更新 map
    if (mapName[current] === undefined) {
      mapName[current] = true;
      map[current] = 1;
      ans.push(current);
    } else {
      if (map[current] === undefined) {
        map[current] = 1;
      }
      let flagName = current + '(' + map[current] + ')';
      while (mapName[flagName] !== undefined) { // 如果重复了，那就不断+1去尝试
        map[current]++;
        flagName = current + '(' + map[current] + ')';
      }
      ans.push(flagName);
      mapName[flagName] = true;
      map[current]++;
    }
  }

  return ans;
};