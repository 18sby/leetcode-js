/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

/*
  任意两个相同任务间的间隔都是 n
  先找到出现最多次数 m 的任务 X，向 (m - 1) 个 X 中间的 n 个等待状态的
  单位时间插入不是X 的任务，再加上最后一个 X 后面的任务数量，最后一个 X 
  后面的任务数量，一定是在(m - 1) 个 X 任务中插入后依然有剩余的任务，
  而 X 又是出现次数最多的任务，那么剩下的这些任务的出现次数肯定也等于 m
  
  特殊情况下：如果我们求出的结果小于了任务的总数，那么肯定是错的，此时返回
  tasks 的长度即可。
*/
var leastInterval = function (tasks, n) {
  let arr = [],
    normalArr = [],
    mostTaskNum = 0;

  // 初始化长度为 26 的数组，key 是 'A' - 'Z'
  for (let i = 65; i <= 90; i++) {
    let key = String.fromCharCode(i);
    arr[key] = 0;
  }

  // 统计每个任务出现的次数
  for (let i = 0; i < tasks.length; i++) {
    arr[tasks[i]]++;
  }

  for (let i = 65; i <= 90; i++) {
    let key = String.fromCharCode(i);
    normalArr.push(arr[key]);
  }

  normalArr.sort((a, b) => b - a);

  // 统计出现次数最多的任务，以及一共有几个并列出现次数最多的任务
  for (let key in normalArr) {
    if (normalArr[key - 1] !== undefined && normalArr[key] !== normalArr[key - 1]) break;
    mostTaskNum++;
  }

  const count = (normalArr[0] - 1) * (n + 1) + mostTaskNum,
    len = tasks.length;

  return count < len ? len : count;
};