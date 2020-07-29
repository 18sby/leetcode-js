var isBipartite = function (graph) {

  //染色法进行二分图判别。相邻顶点染不同颜色，如果遍历中发现相邻顶点
  // 颜色一样，则说明不是二分图
  const len = graph.length;

  //节点颜色数组
  const color = new Array(len).fill(0)

  return dye();

  function dye() {
    for (let i = 0; i < len; i++) {
      if (color[i] === 0) {
        // 染色失败，则说明不是二分图
        if (!dfs(i, 1)) return false
      }
    }

    return true;
  }

  // node表示节点ID，c表示染色
  function dfs(node, c) {
    // 当前节点染色
    color[node] = c;
    for (let i = 0; i < graph[node].length; i++) {
      const arr = graph[node];

      // 如果邻接边两个节点颜色一样，则说明不满足
      if (color[arr[i]] === c) return false

      // 深度优先，对邻接点采用另一种颜色着色
      else if (color[arr[i]] === 0 && !dfs(arr[i], -c)) return false
    }

    return true;
  }

};