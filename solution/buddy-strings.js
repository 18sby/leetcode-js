/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

/*
  思路：
  观察题意和案例可以得出结论
  - 首先，如果 a 和 b 长度不等，那么一定为 false
  
  通过条件：
  1.a 和 b 仅有两个字符不等，并且交换后相等
  2.a 和 b 全等，但是必须有重复字母
*/
var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;

  let notEqualA = '',
    notEqualB = '',
    hasRepeat = false,
    map = new Map();

  for (let i = 0, len = A.length; i < len; i++) {
    let a = A.charAt(i), b = B.charAt(i);
    if (a !== b) {
      notEqualA += a;
      notEqualB = b + notEqualB;
    }
    if (!map.has(a)) {
      map.set(a, 1);
    } else {
      hasRepeat = true;
    }
  }

  return (notEqualA.length === 2 && notEqualA === notEqualB) ||
    (hasRepeat && notEqualA.length === 0);
};