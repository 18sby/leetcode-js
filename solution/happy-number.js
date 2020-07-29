/**
 * @param {number} n
 * @return {boolean}
 */

/*
  弗洛伊德快慢指针查找环，如果快慢指针相遇的点是 1，那么是快乐数
*/
var isHappy = function (n) {
  let slow = n, fast = n;

  const next = (num) => {
    let strNum = String(num), sum = 0;
    for (let i = 0; i < strNum.length; i++) {
      let c = + strNum.charAt(i);
      sum += (c * c);
    }
    return sum;
  }

  do {
    slow = next(slow);
    fast = next(fast);
    fast = next(fast);
    if (slow == 1 || fast == 1) {
      slow = 1;
      break;
    }
  } while (slow !== fast);

  return slow == 1;
};

/*
  76ms
  直观做法：
  利用一个 map 存储对这个数进行快乐算法之中的每个结果，如果有环了并且没有出现 1，
  那么返回 false
*/
var isHappy = function (n) {
  let map = {}, ans = false;

  const next = (num) => {
    let strNum = String(num), sum = 0;
    for (let i = 0; i < strNum.length; i++) {
      let c = + strNum.charAt(i);
      sum += (c * c);
    }
    return sum;
  }

  while (true) {
    n = next(n);

    if (n == 1) {
      ans = true;
      break;
    }

    if (map[n]) break;

    map[n] = 1;
  }

  return ans;
};