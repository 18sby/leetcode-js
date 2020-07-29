/**
 * @param {string} num
 * @return {boolean}
 */

/*
  思路：
  1.首先判断是否出现了前两位相加可以在后面找到的情况
    - 前两位相加，后面的位数是否够
    - 需要一个处理字符串相加的函数
  2.如果找到了继续回溯，看看是否能够一直加到最后
*/
var isAdditiveNumber = function (num) {
  let ans = false;

  // 回溯：以两个数为基础进行回溯，如果可以回溯完全，那么返回true，否则，一直进行回溯
  // '199100199'
  function backtrack(leftStart, rightStart, rightEnd, end) {
    let sum = add(num.slice(leftStart, rightStart), num.slice(rightStart, rightEnd));

    // 按照题目要求，这里有个条件，每一个数都不可能为 02 03 这种以 0 开头
    // 长度超过 1 的数
    if (!isValid(num.slice(leftStart, rightStart))
      || !isValid(num.slice(rightStart, rightEnd))
      || !isValid(sum)) {
      return false;
    }

    // 如果 左 + 右 的和不包含在后面的字符串 || 超过了后面字符串的长度
    // 直接退出此次递归即可
    if (sum.length > end - rightEnd
      ||
      num.slice(rightEnd, rightEnd + sum.length) !== sum) {
      return false;
    }

    // 如果 左 + 右 的和包含在后面的字符串中
    // - 如果正好到了结束字符串，那么返回true
    // - 否则继续回溯
    if (num.slice(rightEnd, rightEnd + sum.length) === sum) {
      if (rightEnd + sum.length === end) {
        ans = true;
        return;
      } else {
        backtrack(rightStart, rightEnd, rightEnd + sum.length, end);
      }
    }
  }

  // 两次遍历，先找到前两个数，如果找到了，以他们为开始进行回溯
  let len = num.length;
  for (let j = 1; j < len; j++) {
    for (let k = j + 1; k < len; k++) {
      // 这里可以过滤掉一大部分无用递归
      if (!isValid(num.slice(0, j)) || !isValid(num.slice(j, k))) continue;
      backtrack(0, j, k, len);
      if (ans) break;
    }
  }

  return ans;
};

// 判断是否为不合理的数，如：03 05 019
function isValid(n) {
  if (n.length > 1 && n[0] === '0') return false;
  return true;
}

// 计算字符串相加
function add(a, b) {
  let sum = '',
    carry = 0,
    aIndex = a.length - 1,
    bIndex = b.length - 1;

  while (aIndex >= 0 || bIndex >= 0 || carry !== 0) {
    let ac = aIndex >= 0 ? Number(a[aIndex]) : 0,
      bc = bIndex >= 0 ? Number(b[bIndex]) : 0;
    aIndex--;
    bIndex--;

    let curr = ac + bc + carry;
    if (curr > 9) {
      curr = String(curr);
      sum = curr.slice(curr.length - 1) + sum;
      carry = Number(curr.slice(0, curr.length - 1));
    } else {
      sum = curr + sum;
      carry = 0;
    }
  }

  return sum;
}