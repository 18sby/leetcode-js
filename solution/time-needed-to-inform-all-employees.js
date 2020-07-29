/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

/*
  优化下面的 BFS 方法的思路：
  使用一个 map 记录所有管理层的下级员工，
  不然会重复计算 n多 n多 n多 次
*/
var numOfMinutes = function (n, headID, manager, informTime) {
  let time = 0, queue = [[headID, 0]];

  let map = {};
  for (let i = 0; i < manager.length; i++) {
    let goalIndex = manager[i];
    if (map[goalIndex] === undefined) {
      map[goalIndex] = [i];
    } else {
      map[goalIndex].push(i);
    }
  }

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      let [index, t] = queue.shift();
      t += informTime[index];
      let indexArr = map[index] || [];
      for (let i = 0; i < indexArr.length; i++) {
        queue.push([indexArr[i], t]);
      }
      size--;
      time = Math.max(t, time);
    }
  }

  return time;
};

/*
  35 个用例超时
  BFS 一层一层通知，每层所需的时间为这一层花费时间最长的人的数
*/
// var numOfMinutes = function(n, headID, manager, informTime) {
//   let time = 0, queue = [ [headID, 0] ];

//   while (queue.length > 0) {
//     let size = queue.length;
//     while (size > 0) {
//       let [index, t] = queue.shift();
//       t += informTime[index];
//       for (let i = 0; i < n; i++) {
//         if (manager[i] === index) {
//           queue.push( [i, t] );
//         }
//       }
//       size--;
//       time = Math.max(t, time);
//     }
//   }

//   return time;
// };

/*
  DFS 就完事了 34个用例超时
*/
// var numOfMinutes = function(n, headID, manager, informTime) {
//   function dfs(time, index) {
//     time += informTime[index];

//     for (let i = 0; i < n; i++) {
//       if (manager[i] === index) {
//         dfs(time, i);
//       }
//     }

//     ans = Math.max(ans, time);
//   }

//   let ans = -Infinity;

//   dfs(0, headID);

//   return ans;
// };