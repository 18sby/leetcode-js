/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

/*
  思路很简单，做的时候都没想出来：
  1.只需要统计 s 中所有字母出现的次数，哈希表
  2.遍历 t，只要字符在 s 中出现过，就把该字符在哈希表中出现的次数 -1
  3.统计哈希表中所有的正值，加起来就可以了，就是需要操作的次数，
    也就是把 t 中多余的字母替换为这些字母，就可以变成 s 的异位词了
*/
var minSteps = function (s, t) {
  let map = new Map(), ans = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    let c = s.charAt(i);
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }

  for (let i = 0, len = t.length; i < len; i++) {
    let c = t.charAt(i);
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
    }
  }

  map = [...map];

  for (let i = 0, len = map.length; i < len; i++) {
    if (map[i][1] > 0) {
      ans += map[i][1];
    }
  }

  return ans;
};