/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

/*
  拓扑排序
  
  1. 创建每一门课与学它之前要先学习的前置课程的结构，使用数组，因为课程总量是确定的
  2. 不断地找到列表中此时不需要前置课程学习的课程
  3. 看看最终学习过的课程是否等于课程总数
*/
var findOrder = function (numCourses, prerequisites) {
  let arr = new Array(numCourses),
    ans = [],
    plen = prerequisites.length,
    queue = [];

  for (let i = 0; i < numCourses; i++) arr[i] = [];

  // 构建第一步的对映关系
  for (let i = 0; i < plen; i++) {
    let [curr, pre] = prerequisites[i];
    if (arr[curr] === undefined) arr[curr] = [];
    arr[curr].push(pre);
  }

  // 找到第一波无前置课程的课
  for (let i = 0; i < numCourses; i++) {
    if (arr[i].length === 0) {
      queue.push(i);
      ans.push(i);
    }
  }

  while (queue.length > 0) {
    let offer = queue.shift();
    for (let i = 0; i < numCourses; i++) {
      let index = arr[i].indexOf(offer);
      if (index !== -1) {
        arr[i].splice(index, 1);
        if (arr[i].length === 0) {
          queue.push(i);
          ans.push(i);
        }
      }
    }
  }

  return ans.length === numCourses ? ans : [];
};