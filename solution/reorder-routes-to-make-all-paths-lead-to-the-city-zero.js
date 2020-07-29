/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

/*
  从 0 出发，bfs，把每一层不可到达终点的城市变向，访问过的不要重复访问
*/
var minReorder = function (n, connections) {
  let queue = [0],
    map = {},
    len = connections.length,
    step = 0,
    visited = { 0: true },
    arrive = { 0: true };

  // 把所有的城市，存储为，它可以到达的目的以及来源
  for (let i = 0; i < len; i++) {
    let [from, to] = connections[i];
    if (map[from] === undefined) map[from] = { target: [], source: [] };
    if (map[to] === undefined) map[to] = { target: [], source: [] };
    map[from].target.push(to);
    map[to].source.push(from);
  }

  while (queue.length > 0) {
    let curr = queue.shift();
    let { target, source } = map[curr];

    // 目的
    for (let i = 0; i < target.length; i++) {
      let t = target[i];
      if (visited[t]) continue;
      visited[t] = true;
      if (!arrive[t]) {
        step++;
        arrive[t] = true;
        queue.push(t);
      }
    }

    // 来源
    for (let i = 0; i < source.length; i++) {
      let t = source[i];
      if (visited[t]) continue;
      visited[t] = true;
      queue.push(t);
    }
  }

  return step;
};