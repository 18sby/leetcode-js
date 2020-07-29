/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  BFS + 小顶堆实现的队列
  
  每次从队列中拿出 cost 最小的格子进行 BFS
  
  思路：
  
  1.先沿着第一个格子开始，顺着他方向走，直到又访问到了已访问过的格子为止，
    把这些点加入到队列中
  2.开始遍历这个队列，每次取出队列中最小花费的格子，把他四周不越界并且出现更小花费
    的格子加到队列中，不断重复这个过程。。。
    
  注意！！！：我们已经访问过的点，如果下一次通过别的路径再次访问到他的时候，
     发现这条路径的花费更少，那么即使访问过了，但我们依然更新他的最小花费，
     并把他放到队列中，因为它的邻居一定也会有更小花费的路径
     
  (我的解法有个结构上的问题：我应该把构建、插入、删除小顶堆，作为一个类，实例化出来使用
  不能卸载全局上，直接操作全局的变量 queue ，先这样吧，毕竟为了做题，哈哈~)
*/
var minCost = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let row = grid.length,
    col = grid[0].length,
    visited = [],
    queue = [];

  for (let i = 0; i < row; i++) visited[i] = [];

  // 初始化
  let i = 0, j = 0;
  while (i >= 0 && i < row && j >= 0 && j < col
    && visited[i][j] === undefined) {
    queue.push([i, j]);
    let ways = [[], [0, 1], [0, -1], [1, 0], [-1, 0]];
    let c = grid[i][j];
    visited[i][j] = 0;
    i += ways[c][0];
    j += ways[c][1];
  }

  while (queue.length > 0) {
    let offer = take();
    let [i, j] = offer;
    let ways = [[], [0, 1], [0, -1], [1, 0], [-1, 0]],
      c = grid[i][j];

    for (let key of ways.keys()) {
      if (key === 0) continue;

      let way = ways[key];
      let ci = i + way[0],
        cj = j + way[1];

      if (ci < 0 || ci >= row || cj < 0 || cj >= col) {
        continue;
      }

      let temp = key !== grid[i][j] ? 1 : 0;
      if (temp + visited[i][j] < visited[ci][cj]
        || visited[ci][cj] === undefined) {
        visited[ci][cj] = visited[i][j] + temp;
        queue.push([ci, cj]);
      }
    }
  }

  // 堆操作 - 构建小顶堆
  function build() {
    let n = queue.length;
    let i = Math.floor(n / 2) - 1;
    for (; i >= 0; i--) {
      let c = i,
        l = 2 * i + 1,
        r = 2 * i + 2;

      if (l < n && visited[queue[l][0]][queue[l][1]] <
        visited[queue[c][0]][queue[c][1]]) {
        c = l;
      }
      if (r < n && visited[queue[r][0]][queue[r][1]] <
        visited[queue[c][0]][queue[c][1]]) {
        c = r;
      }

      [queue[i], queue[c]] = [queue[c], queue[i]];
    }
  }
  // 堆操作 - 取出堆顶元素
  function take() {
    [queue[0], queue[queue.length - 1]] = [queue[queue.length - 1], queue[0]];
    let top = queue.pop();
    build();
    return top;
  }

  return visited[row - 1][col - 1];
};