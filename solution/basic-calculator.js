/**
 * @param {string} s
 * @return {number}
 */

/*
  栈 参考 「powcai」的解题思路

  自己憋了半天总有 bug，还不如学下大佬的思路
  
  稍微理解 + 解释下思路，一共有几种情况：
  
  --------------------------------------
  
  空格 -> 直接跳过
  
  减号 -> 更新运算符号为 -1
  加号 -> 更新运算符号为 1
  「
    符号存为 1(+) 和 -1(-) 的好处是计算起来比较清晰
    如果是加：5 + 3 * 1  => 即为 5 + 3 的效果
    如果是减：5 + 3 * -1 => 即为 5 - 3 的效果
    优化了 if...else 语句，否则，if (sign === '+')  if (sign === '-')
  」
  
  左括号 -> 将当前的 sum 和 符号保存到 stack 中，为了后面遇到右括号时的计算，
  后面计算的结果和栈里的值做运算的时候，只需要让后面运算的值 * 刚刚保存的符号 + sum
  
  右括号 -> 执行 curr = curr * stack.pop(){ 这是上面刚刚保存的符号 } + 
  stack.pop(){ 这是上面刚刚保存的运算结果 }
  
  数字 -> 利用一个临时变量 temp 存储所有连续的数字，直到数字不再连续，
  用前面的总运算结果 sum 和 temp 进行运算即可
  
*/
var calculate = function (s) {
  let sum = 0,
    stack = [],
    sign = 1,
    i = 0,
    n = s.length;

  while (i < n) {
    let c = s.charAt(i);
    if (c === ' ') {
      i++;
    }
    else if (c === '-') {
      sign = -1;
      i++;
    }
    else if (c === '+') {
      sign = 1;
      i++;
    }
    else if (c === '(') {
      stack.push(sum, sign);
      sum = 0;
      sign = 1;
      i++;
    }
    else if (c === ')') {
      sum = sum * stack.pop() + stack.pop();
      i++;
    }
    else {
      let temp = c;
      i++;
      while (i < n && isNumber(s.charAt(i))) {
        temp += s.charAt(i);
        i++;
      }
      sum += Number(temp) * sign;
    }
  }

  return sum;
};

function isNumber(n) {
  n = Number(n);
  return typeof n === 'number' && !isNaN(n);
}