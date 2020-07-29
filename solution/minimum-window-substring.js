/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/*
  参考官方题解：滑动窗口
  思路：
  1.设定一个left和一个right为0
  2.找到符合条件的区间
  3.right指针停止移动
  4.开始移动left指针
  5.直到不能再压缩，找到最小的区间存起来
  
  6.这时的left + 1，再次开始重复[2, 3, 4, 5]步骤
*/
var minWindow = function (s, t) {
  let left = 0,
    right = 0,
    need = {}, // 存储最终所需的字符串
    map = {}, // 存储遍历区间时候存储的已找到字符
    count = 0, // 考虑到 t 中有重复的字符串，所以count的累加和累减需要注意:
    // 累加的条件：当前区间内的当前字符的数量 小于 t中的当前字符串的数量 => 执行count++
    // 累减的条件：当前区间内的当前字符的数量 等于 t中的当前字符串的数量 => 执行count--
    r = true, // 记录上一次是 right 右移
    result = '';

  // 初始化need 和 map，map用来记录，need用作map对比
  for (let i = 0; i < t.length; i++) {
    need[t[i]] = need[t[i]] === undefined ? 1 : need[t[i]] + 1;
    map[t[i]] = 0;
  }

  while (right < s.length) {
    if (r) {
      if (s[right] in map) {
        if (map[s[right]] < need[s[right]]) {
          count = count + 1;
        }
        map[s[right]] = map[s[right]] + 1;
      }
    }
    let temp = s.slice(left, right + 1);
    if (count === t.length) {
      if (s[left] in map) {
        result = (temp.length < result.length || result === '') ? temp : result;
        if (map[s[left]] === need[s[left]]) {
          count = count - 1;
        }
        map[s[left]] = map[s[left]] - 1;
      }
      left = left + 1;
      r = false;
    }
    else {
      right = right + 1;
      r = true;
    }
  }

  return result;
};