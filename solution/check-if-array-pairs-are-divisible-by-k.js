/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */

/*
  统计余数个数, 再检查一下所有余数 x 和 k-x 个数是不是一样
  为了好计算，统计余数的过程中如果出现负数，再把它加上 k，不然处理的特殊情况就比较多了
*/
var canArrange = function (arr, k) {
  let map = {}, len = arr.length;

  // 统计所有余数的出现次数到 map 中
  for (let i = 0; i < len; i++) {
    let remain = arr[i] % k;
    if (remain < 0) remain += k;
    map[remain] === undefined
      ? map[remain] = 1
      : map[remain] += 1;
  }

  // 遍历所有余数，看看是否对于每个余数 x，在 map 中都有相同出现次数的 k-x
  let keys = Object.keys(map), n = keys.length;
  let i = 0;
  while (i < n) {
    let key = keys[i];
    if (map[key] === 0) { // 处理过了，跳过
      i++;
      continue;
    }
    if (key == '0' && map[key] % 2 === 0) { // 本身余数为 0，自己的出现次数是偶数即可
      map[key] = 0;
    } else if (map[k - Number(key)] === map[key]) { // map[x] === map[k-x]
      map[key] = 0;
      map[k - Number(key)] = 0;
    } else { // 一旦不满足返回 false
      return false;
    }
    i++;
  }

  return true;
};