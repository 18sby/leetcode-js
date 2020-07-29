/**
 * @param {number} n
 * @return {number}
 */

/*
  思路：看了别人的题解，没想到这是一道数学题，找规律
  - 如果 n > 10，那么只需要计算到 10 即可，因为 10 位以上的数必然会有重复
  - 前两个特殊处理
*/
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;
  if (n === 1) return 10;
  if (n === 2) return 91;
  n = n > 10 ? 10 : n;

  let ans = 91,
    temp = 81;

  let i = 3;
  while (i <= n) {
    temp = temp * (9 - i + 2);
    ans += temp;
    i++;
  }

  return ans;
};

/*
  超时
  直接遍历法，依次判断是否为符合要求的值
*/
var countNumbersWithUniqueDigits = function (n) {
  let ans = 0,
    more = 1;

  let i = 0;
  while (i < n) {
    more *= 10;
    i++;
  }

  for (let j = 0; j < more; j++) {
    if (isValid(j) === true) {
      ans++;
    }
  }

  function isValid(num) {
    num = String(num);
    let str = '',
      i = 0,
      res = true;
    while (i < num.length) {
      if (str.indexOf(num[i]) > -1) {
        res = false;
        break;
      }
      str += num[i];
      i++;
    }

    return res;
  }

  return ans;
}

/*
  2504ms
  直观做法：回溯
  1.使用一个 map 结构记录，如果有重复值就跳过，此次回溯
  2.注意：
    - 第一位不能为 0
*/
var countNumbersWithUniqueDigits = function (n) {
  let ans = 0,
    nums = new Array(),
    map = new Map();

  // 设置所有数字可用(未使用)
  for (let i = 0; i <= 9; i++) {
    map.set(i, true);
    nums.push(i);
  }

  // 回溯
  function backtrack(count, temp) {
    // 如果长度不超过 n，那么统计次数
    if (count <= n) {
      ans++;
    }

    // 如果长度超过 n，终止此次递归
    if (count > n) return;
    // 遍历
    for (let i = 0; i < temp.length; i++) {
      if (count === 0 && temp[i] === 0) continue;
      if (map.get(temp[i]) === true) {
        map.set(temp[i], false);
        count = count + 1;
        backtrack(count, temp.slice(0, i).concat(temp.slice(i + 1)));
        count = count - 1;
        map.set(temp[i], true);
      } else {
        continue;
      }
    }
  }
  backtrack(0, nums);

  return ans;
};