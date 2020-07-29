/**
 * @param {number[]} T
 * @return {number[]}
 */
/*
  1. 使用单调递减的栈 stack
  2. 栈中存储的是每一天的索引，如果今天的气温比栈顶的气温低，那就说明栈顶的那天的温度
     到今天没有升高，把今天的索引加入到栈中
  3. 只要今天的气温比栈顶的那天的气温高，那么如果栈顶元素一直比当前气温低，就不停迭代，
     （当前索引 - 栈顶元素）就是栈顶元素那天的温度需要几天才能升高的值，更新即可。
*/
var dailyTemperatures = function (T) {
  let stack = [],
    len = T.length,
    ans = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    let curr = T[i];
    while (stack.length > 0 && curr > T[stack[stack.length - 1]]) {
      let index = stack.pop();
      ans[index] = i - index;
    }
    stack.push(i);
  }

  return ans;
};