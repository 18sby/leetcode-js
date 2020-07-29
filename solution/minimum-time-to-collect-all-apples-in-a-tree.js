/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */

/*
  BFS 遇到有苹果的点，将这条路径的过程记录到 map 中，重复路径不要记录，
  最终返回的结果就是路径总数的 2 倍，这个规律观察测试用例的图就可以得出了
  
  queue 中的每一个元素存储的是到这个点的路径 比如 [ [0,1,2], [...] ] 代表当前点是 2
  路径为 0 -> 1 -> 2，如果 2 是有苹果，那么记录 0-1 1-2 这两条路径到 map 中即可
*/
var minTime = function (n, edges, hasApple) {
  let len = edges.length, map = {}, queue = [[0]];
  let mapEdges = [];
  for (let i = 0; i < len; i++) {
    let [from, to] = edges[i];
    if (!mapEdges[from]) mapEdges[from] = [];
    if (!mapEdges[from].includes(to)) mapEdges[from].push(to);
  }

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      size--;

      let offerArr = queue.shift();
      let curr = offerArr[offerArr.length - 1];
      if (hasApple[curr]) {
        for (let i = offerArr.length - 1; i > 0; i--) {
          let from = offerArr[i - 1], to = offerArr[i];
          map[`${from}-${to}`] = 1;
        }
      }

      let targets = mapEdges[curr];
      if (targets === undefined) continue;
      for (let i = 0; i < targets.length; i++) {
        queue.push([...offerArr, targets[i]]);
      }
    }
  }

  let count = Object.keys(map).length * 2;
  return count;
};