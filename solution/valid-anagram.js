/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
  不用哈希表 2164ms ！！！                                                                                                                                                                                                                                                                                                                                                                                              
*/
var isAnagram = function (s, t) {
  s = s.split('');
  s.sort((a, b) => { return a > b ? 1 : -1 });
  s = s.join(',');
  t = t.split('');
  t.sort((a, b) => { return a > b ? 1 : -1 });
  t = t.join(',');
  return s === t;
}

/*
  使用数组计算
  1.一个长度为26的数组，下标分别为a - z，值都为 0
  2.遍历 s ，对应的字母下标的值 加1
  3.遍历 t ，对应的字母下标的值 减1
  4.遍历这个数组，如果所有值都为 0 ，是异位词
*/
var isAnagram = function (s, t) {
  let arr = [], twoSix = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 26; i++) {
    arr[twoSix[i]] = 0;
  }

  for (let i = 0, len = s.length; i < len; i++) {
    arr[s[i]]++;
  }

  for (let i = 0, len = t.length; i < len; i++) {
    arr[t[i]]--;
  }

  for (let i = 0, len = twoSix.length; i < len; i++) {
    if (arr[twoSix[i]] !== 0) {
      return false;
    }
  }

  return true;
}

/*
  哈希表
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = new Map(),
    mapT = new Map(),
    ans = true;

  for (let i = 0, len = s.length; i < len; i++) {
    if (!mapS.has(s[i])) {
      mapS.set(s[i], 1);
    }
    else {
      mapS.set(s[i], mapS.get(s[i]) + 1);
    }
    if (!mapT.has(t[i])) {
      mapT.set(t[i], 1);
    }
    else {
      mapT.set(t[i], mapT.get(t[i]) + 1);
    }
  }

  for (let [k, v] of mapS) {
    if (v !== mapT.get(k)) {
      ans = false;
      break;
    }
  }

  return ans;
};