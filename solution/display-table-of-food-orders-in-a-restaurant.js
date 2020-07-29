/**
 * @param {string[][]} orders
 * @return {string[][]}
 */

/*
  1. 把菜品放到一个数组中排序，记录他们在数组中的索引，存到 map 中，第一项是 table
  2. 二维数组，每一个都是，不同桌号的数组，长度为菜品的长度，第一项是桌号
  3. 把不同的桌号放到一个数组中，Set 结构去重
  4. 然后用菜品和桌号的数组生成一个二维数组，遍历一遍 orders 填上就好了
*/
var displayTable = function (orders) {
  let len = orders.length,
    foodArr = new Set(),
    tableArr = new Set(),
    mapFood = {},
    mapTable = {};

  for (let i = 0; i < len; i++) {
    const [, table, food] = orders[i];
    foodArr.add(food);
    tableArr.add(table);
  }
  tableArr = [...tableArr];
  foodArr = [...foodArr];

  // 排序
  foodArr.sort((a, b) => {
    if (a > b) return 1;
    return -1;
  });
  tableArr.sort((a, b) => a - b);

  // 构建哈希
  for (let i = 0; i < tableArr.length; i++) mapTable[tableArr[i]] = i + 1;
  for (let i = 0; i < foodArr.length; i++) mapFood[foodArr[i]] = i + 1;

  // 构建二维数组
  foodArr.unshift('Table');
  let tableLen = tableArr.length;
  let ans = new Array(1 + tableLen);
  ans[0] = foodArr;
  let temp = new Array(foodArr.length - 1).fill('0');
  for (let i = 1; i < 1 + tableLen; i++) {
    ans[i] = [tableArr.shift(), ...temp];
  }

  for (let i = 0; i < len; i++) {
    const [, table, food] = orders[i];
    ans[[mapTable[table]]][mapFood[food]] = String(Number(ans[[mapTable[table]]][mapFood[food]]) + 1);
  }

  return ans;
};