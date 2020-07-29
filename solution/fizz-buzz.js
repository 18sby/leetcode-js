/**
 * @param {number} n
 * @return {string[]}
 */

/*
  按题意走就完事了，定义三个函数判断当前数字是否为3的倍数、5的倍数、3 和 5 的倍数
*/
var fizzBuzz = function (n) {
  const isMultiple3 = num => num % 3 === 0;
  const isMultiple5 = num => num % 5 === 0;
  const isMultiple3And5 = num => {
    return isMultiple3(num) && isMultiple5(num);
  };

  let ans = [];

  // 先正常填充所有数字
  for (let i = 1; i <= n; i++) {
    ans[i - 1] = i + '';
  }

  // 再遍历一次，处理填写字符串的情况
  for (let i = 1; i <= n; i++) {
    if (!isMultiple3(i) && !isMultiple5(i)) continue;

    if (isMultiple3And5(i)) {
      ans[i - 1] = 'FizzBuzz';
      continue;
    }

    if (isMultiple3(i)) {
      ans[i - 1] = 'Fizz';
      continue;
    }

    if (isMultiple5(i)) {
      ans[i - 1] = 'Buzz';
      continue;
    }
  }

  return ans;
};