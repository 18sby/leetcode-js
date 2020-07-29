/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/*
  拓扑排序
  1. 存储所有课程要学的前置课程
  2. 每次找到一门不需要前置课程的课程来学习
     每次学完这门课程，在所有课程的前置课程中删除这门课程
  3. 最后看看是否所有课程都学完
*/
var canFinish = function (numCourses, prerequisites) {
  let pic = new Array(numCourses),
    prlen = prerequisites.length,
    queue = [],
    stack = 0;

  for (let i = 0; i < numCourses; i++) {
    pic[i] = [];
  }

  // 存储每门课程的前置需要课程
  for (let i = 0; i < prlen; i++) {
    let [target, condition] = prerequisites[i];
    pic[target].push(condition);
  }

  // 找到第一轮不需要前置课程的课程
  for (let i = 0; i < numCourses; i++) {
    let curr = pic[i];
    if (curr.length === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    let offer = queue.shift();

    for (let i = 0; i < numCourses; i++) {
      let curr = pic[i];
      let index = curr.indexOf(offer);
      if (index === -1) continue;

      curr.splice(index, 1);
      if (curr.length === 0) queue.push(i);
    }

    stack++;
  }

  return stack === numCourses;
};