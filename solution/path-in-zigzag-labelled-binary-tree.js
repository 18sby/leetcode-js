/**
 * @param {number} label
 * @return {number[]}
 */

/*
  1. 先生成数组，够 label 就可以了
  2. 找到 label 是第几行，第几列
  3. 沿着向上找上一层的 parent 就行了
*/
var pathInZigZagTree = function (label) {
  let arr = [], res = []; // 偶数行是正序，奇数行是逆序
  let i = 1, floor = 0, count = 1;

  while (i <= label) {
    let temp = [], num = 0;
    while (num < count) {
      temp.push(i++);
      num++;
    }
    if (floor % 2 !== 0) {
      temp = temp.reverse();
    }
    arr.push(temp);
    floor++;
    count *= 2;
  }

  floor = arr.length - 1;
  let pos;
  for (let i = 0; i < arr[floor].length; i++) {
    if (arr[floor][i] === label) {
      pos = i;
      break;
    }
  }

  floor--;
  res.unshift(label);
  while (floor >= 0) {
    pos = Math.floor(pos / 2);
    res.unshift(arr[floor][pos]);
    floor--;
  }

  return res;
};