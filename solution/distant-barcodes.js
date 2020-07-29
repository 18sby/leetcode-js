/**
 * @param {number[]} barcodes
 * @return {number[]}
 */

/*
  计数排序的变种问题
*/
var rearrangeBarcodes = function (barcodes) {
  let len = barcodes.length;

  // 1.统计每个数字出现的次数
  let map = new Map();
  for (let v of barcodes) {
    if (!map.has(v)) {
      map.set(v, 1);
    }
    else {
      map.set(v, map.get(v) + 1);
    }
  }

  let arr = [];
  for (let [k, v] of map) {
    arr.push({ val: k, count: v });
  }

  // 2.按照出现次数降序排序，出现次数最多的元素在前
  arr.sort((a, b) => {
    return b.count - a.count
  });

  // 3.从奇数位置开始填充，也即是 0 2 4 6 8 ... 
  //   这里不要混，因为索引 0 是第一个位置，也就是从索引 0 开始
  // 4.填充完奇数位置，填充偶数位置
  // 5.填完为止
  let first = 0, // 索引 0 2 4 6 ...
    second = 1; // 索引 1 3 5 7 ...
  for (let el of arr) {
    while (el.count > 0) {
      if (first < len) {
        barcodes[first] = el.val;
        el.count--;
        first += 2;
      }
      else {
        barcodes[second] = el.val;
        el.count--;
        second += 2;
      }

    }
  }

  return barcodes;
};