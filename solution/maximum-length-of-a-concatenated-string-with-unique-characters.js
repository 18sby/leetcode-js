/**
 * @param {string[]} arr
 * @return {number}
 */

/*
  位运算去重：搞懂在优化
*/

/*
  晕了，看题没看清楚，可以跳跃着取子元素，不要求是连续子序列！！！
  回溯
*/
var maxLength = function (arr) {
  let ans = 0, checkMap = new Map(),
    more = 0, cacheSelfRepeat = new Map();

  for (let q = 0; q < arr.length; q++) {
    more += arr[q].length;
  }

  // 设置当前字符串的所有字符为已使用(不可使用)
  function setUsed(str) {
    for (let i = 0, len = str.length; i < len; i++) {
      checkMap.set(str[i], false);
    }
  }

  // 设置当前字符串的所有字符为未使用
  function setNoUse(str) {
    for (let i = 0, len = str.length; i < len; i++) {
      checkMap.set(str[i], true);
    }
  }

  // 判断是否字符串自身有重复字符 - 利用一块空间优化查找速度
  function selfRepeat(str) {
    if (cacheSelfRepeat.get(str) !== undefined) return cacheSelfRepeat.get(str);

    let isSelfRepeat = false,
      miniMap = new Map();

    for (let i = 0, len = str.length; i < len; i++) {
      if (!miniMap.has(str[i])) {
        miniMap.set(str[i], 1);
      } else {
        isSelfRepeat = true;
        break;
      }
    }

    cacheSelfRepeat.set(str, isSelfRepeat);
    return isSelfRepeat;
  }

  // 递归
  function backtrack(curr, count, store) {
    // 判断长度，更新最大长度即可 - 优化掉这的计算长度
    ans = Math.max(ans, count);

    // 此处优化 - 当 curr + store 中所有元素的长度和小于 ans 的时候可以终止此次递归
    if (ans === more) return;

    // 递归
    for (let i = 0; i < store.length; i++) {
      let flag = true;
      // 如果这个元素本身具有重复字符，那么跳过
      if (selfRepeat(store[i]) === true) continue;
      // 判断如果下一个 push 进来的元素与当前字符串有重复字符，跳过这个元素
      for (let j = 0, clen = store[i].length; j < clen; j++) {
        if (checkMap.get(store[i][j]) === false) {
          flag = false;
          break;
        }
      }
      if (flag === false) continue;

      // 进行回溯
      curr.push(store[i]);
      setUsed(store[i]);
      backtrack(curr, count + store[i].length, store.slice(0, i).concat(store.slice(i + 1)));
      curr.pop();
      setNoUse(store[i]);
    }
  };

  for (let i = 0, len = arr.length; i < len; i++) {
    if (ans === more) break;

    // 如果这个元素本身具有重复字符，那么跳过
    if (selfRepeat(arr[i]) === true) continue;
    setUsed(arr[i]);
    backtrack([arr[i]], arr[i].length, arr.slice(i + 1));
    setNoUse(arr[i]);
  }

  return ans;
};