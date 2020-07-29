/**
 * @param {string} tiles
 * @return {number}
 */

/*
  直观做法：回溯 + 去重
*/
var numTilePossibilities = function (tiles) {
  if (tiles.length === 0) return 0;
  if (tiles.length === 1) return 1;

  let checkMap = new Map(), // 去重用
    ans = 0;

  // 递归
  function backtrack(str, store) {
    // 如果 str 不为空，并且不重复，那么答案加 1，缓存进 checkMap 中
    if (str !== '' && !checkMap.get(str)) {
      ans++;
      checkMap.set(str, 1);
    }

    // 回溯
    for (let i = 0; i < store.length; i++) {
      str += store[i];
      backtrack(str, store.slice(0, i) + store.slice(i + 1, store.length));
      str = str.slice(0, str.length - 1);
    }
  };
  backtrack('', tiles);

  return ans;
};