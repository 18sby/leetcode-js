/**
 * @param {number[][]} A
 * @return {number}
 */

/*
  从最外层的 1 向里面走，所有联通的 1 都变成 0，统计剩余的 1 的个数
*/
var numEnclaves = function(A) {
  let row = A.length,
      col = A[0].length,
      count = 0,
      visited = new Array(row).fill(1).map(_ => new Array(col).fill(false));
  // false 未访问过   true 访问过
  
  function bfs(i, j) {
    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let way of ways) { // ni: next_i    nj: next_j
      let ni = i + way[0],
          nj = j + way[1];
      
      if (
        ni < 0 || nj < 0 || ni >= row || nj >= col ||
        visited[ni][nj] === true ||
        A[ni][nj] == 0
      ) {
        continue ;
      }
      
      A[ni][nj] = 0;
      visited[ni][nj] = true;
      bfs(ni, nj);
    }
  }
  
  // 四条边上的 1 开始，进行 bfs
  for (let i = 0; i < row; i++) {
    if (A[i][0] == 1) {
      A[i][0] = 0;
      visited[i][0] = true;
      bfs(i, 0);
    }
    if (A[i][col-1] == 1) {
      A[i][col-1] = 0;
      visited[i][col-1] = true;
      bfs(i, col-1);
    }
  }
  for (let i = 0; i < col; i++) {
    if (A[0][i] == 1) {
      A[0][i] = 0;
      visited[0][i] = true;
      bfs(0, i);
    }
    if (A[row-1][i] == 1) {
      A[row-1][i] = 0;
      visited[row-1][i] = true;
      bfs(row-1, i);
    }
  }
  
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (A[i][j] == 1) count++;
    }
  }
  
  return count;
};