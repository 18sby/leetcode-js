/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

/*
  对根节点进行 DFS，看看是或否有满足条件的路径
*/
var pathSum = function (root, sum) {
  function dfs(curr, total, node) {
    if (node === null) return;
    curr.push(node.val);
    total += node.val;

    if (total === sum && node.left === null && node.right === null) {
      return ans.push([...curr]);
    }

    dfs(JSON.parse(JSON.stringify(curr)), total, node.left);
    dfs(JSON.parse(JSON.stringify(curr)), total, node.right);
  }

  let ans = [];

  dfs([], 0, root);

  return ans;
};