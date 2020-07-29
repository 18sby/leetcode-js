/**
 * @param {number[]} arr
 * @return {number[]}
 */

/*
  可能有点复杂了
  
  1. 把存在 1 个数相同的数放到 map 的一个数组中
  2. 按照含有 1 个数，从小到大，把 map 中存储的值拿出来，放到新数组中，
     放之前正序排个序
*/
var sortByBits = function (arr) {
  function binary(num) {
    return num.toString(2).replace(/0/g, '').length;
  }

  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].toString(2).replace(/0/g, '').length;
    if (map[key] === undefined) map[key] = [];
    map[key].push(arr[i]);
  }

  let keys = Object.keys(map);
  keys.sort((a, b) => Number(a) - Number(b));

  let newArr = [];
  for (let i = 0; i < keys.length; i++) {
    let curr = map[keys[i]];
    curr.sort((a, b) => a - b);
    newArr.push(...curr);
  }

  return newArr;
};