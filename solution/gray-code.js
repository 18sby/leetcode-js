/**
 * @param {number} n
 * @return {number[]}
 */

/*
  画图：索引：偶数拼0、1，奇数拼1、0
*/
var grayCode = function (n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let result = ['0', '1'];

  for (let i = 2; i <= n; i++) {
    let temp = [];
    for (let j = 0; j < result.length; j++) {
      let cur = result[j],
        first = j % 2 ? '1' : '0';
      temp.push(cur + first);
      first = first % 2 ? '0' : '1';
      temp.push(cur + first);
    }
    result = temp;
  }

  let len = result.length;
  while (len > 0) {
    result[len - 1] = parseInt(result[len - 1], 2);
    len = len - 1;
  }

  return result;
};