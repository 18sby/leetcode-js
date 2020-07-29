/**
 * @param {number[][]} nums
 * @return {number[]}
 */

/*
  1. 利用对角线的特点，同一对角线的元素的横、纵坐标和等于一个值
  2. 对于同一个对角线上的点来说，纵坐标小的在前
  3. 根据以上条件排序输出即可
*/
var findDiagonalOrder = function (nums) {
  if (nums.length === 0) return [];
  let rowLimit = nums.length, ans = [], arr = [];

  // 按每一个元素的对角线之和，同一对角线上的点放到同一个数组中
  for (let x = 0; x < rowLimit; x++) {
    let columns = nums[x];
    for (let y = 0; y < columns.length; y++) {
      let index = x + y;
      if (arr[index] === undefined) arr[index] = [];
      arr[index].push([x, y]);
    }
  }

  // 把每一组对角线的值排序后，加到 ans 中
  for (let curr of arr) {
    curr.sort((a, b) => a[1] - b[1]);
    for (let site of curr) {
      let [x, y] = site;
      ans.push(nums[x][y]);
    }
  }

  return ans;
};

/*
  一个个位置去遍历是超时的
*/
// var findDiagonalOrder = function(nums) {
//   if (nums.length === 0) return [];
//   if (nums.length === 1) return nums[0];
//   let rowLimit = nums.length, colLimit = 0, ans = [];

//   for (let i = 0; i < rowLimit; i++) {
//     colLimit = Math.max(colLimit, nums[i].length);
//   }

//   let row = 0, col = 0;
//   while (true) {
//     let x = row, y = col;
//     while (true) {
//       // console.log( 'x, y: ', x, y );
//       if (nums[x] === undefined || nums[x][y] === undefined) {
//         x--; y++;
//       } else {
//         ans.push( nums[x][y] );
//         x--; y++;
//       }

//       if (x < 0 || y >= colLimit) break;
//     }

//     // console.log( 'row, col', row, col );
//     if (row === rowLimit - 1 && col === colLimit - 1) break;
//     if (row < rowLimit - 1) {
//       row++;
//     } else {
//       col++;
//     }
//   }

//   return ans;
// };