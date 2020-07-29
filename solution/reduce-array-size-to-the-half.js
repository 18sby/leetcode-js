/**
 * @param {number[]} arr
 * @return {number}
 */

var minSetSize = function (arr) {
  let map = new Map(), count = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  map = Array.from(map);

  map.sort((a, b) => b[1] - a[1]);

  let gets = 0, target = arr.length / 2;
  for (let i = 0, len = map.length; i < len; i++) {
    if (gets >= target) break;
    gets += map[i][1];
    count++;
  }

  return count;
};

/*
  思路：
  1.先创建一个所有数值重复出现次数的数组
  2.逆序排序
  3.看看从这个数组中最少拿几个元素，才能拿到 >= 一半数量的元素
*/
var minSetSize = function (arr) {
  let repeat = [], map = new Map(), count = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  map.forEach((v, k) => {
    repeat.push(v);
  });

  repeat.sort((a, b) => b - a);

  let gets = 0;
  while (gets < arr.length / 2) {
    gets += repeat.shift();
    count++;
  }

  return count;
};