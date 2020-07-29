/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */

/*
  思路：
  用一个 map 创建无向图，使用一个已访问过的数组
  这个结构可以看成一张图，或者一棵树，然后使用 DFS 和 BFS 均可
  这里使用 DFS
  
  主要是深度优先搜索中有很多细节：
  1. 计算当前点的概率的时候，要从双向图中，要把它的已访问过的兄弟点的数量减去，
     不然概率会计算错误
  2. 就算青蛙跳到了目标点，但是秒数没有用完，依然要接着跳，只有在秒数用完并且此时
     跳到了目标点的时候，才算有解
  3.别忘了跳过的点就不能再跳了
*/
var frogPosition = function (n, edges, t, target) {
  if (edges.length === 0) return 1;

  let map = {}, ans = 0, visited = [];

  // 无向图，双向连通
  for (let i = 0; i < edges.length; i++) {
    let curr = edges[i];
    if (map[curr[0]] === undefined) {
      map[curr[0]] = [curr[1]];
    } else {
      map[curr[0]].push(curr[1]);
    }

    if (map[curr[1]] === undefined) {
      map[curr[1]] = [curr[0]];
    } else {
      map[curr[1]].push(curr[0]);
    }
  }

  // 深度优先搜索 dfs(当前点位置, 从顶点 1 跳当前点的概率, 还剩多少秒数可用)
  function dfs(site, rate, t) {
    if (site === target && t === 0) {
      return ans = rate;
    }

    if (t === 0) return;

    if (map[site] === undefined) return;

    let next = map[site], len = next.length, use = 0;

    // use: 是当前点下一步可跳的点的个数
    for (let i = 0; i < len; i++) {
      if (visited[next[i]] === undefined) use++;
    }

    if (use === 0 && site === target) {
      return ans = rate;
    }

    for (let i = 0; i < len; i++) {
      if (visited[next[i]] === 1) continue;
      visited[next[i]] = 1;
      dfs(next[i], rate * 1 / use, t - 1);
      visited[next[i]] = undefined;
    }
  }

  visited[1] = 1;
  dfs(1, 1, t);

  return ans;
};