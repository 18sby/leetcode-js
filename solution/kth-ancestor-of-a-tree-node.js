/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  let dp = new Array(n).fill(1).map(_ => new Array(Math.floor(Math.log(n) / Math.log(2)) + 1));
  for (let i = 0; i < n; i++) {
    dp[i][0] = parent[i];
  }
  // console.log( '初始化后: ', dp );
  for (let j = 1; (1 << j) < n; j++) {
    for (let i = 0; i < n; i++) {
      if (dp[i][j - 1] !== -1) {
        dp[i][j] = dp[dp[i][j - 1]][j - 1];
      } else {
        dp[i][j] = -1;
      }
    }
  }
  this.dp = dp;
  // console.log( 'dp: ', dp );
};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  if (k === 0 || node === -1) return node;
  let p = Math.floor(Math.log(k) / Math.log(2));
  return this.getKthAncestor(this.dp[node][p], k - (1 << p));
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */