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
  dfs 找到总和为 sum 的同时，必须保证这个节点是叶子节点
*/
var pathSum = function (root, sum) {
  function dfs(node, total, combin, ans) {
    if (!root) return;
    if (total === sum && !node.left && !node.right) {
      return ans.push(combin);
    }
    if (node.left) {
      let val = node.left.val;
      dfs(node.left, total + val, combin.concat(val), ans);
    }
    if (node.right) {
      let val = node.right.val;
      dfs(node.right, total + val, combin.concat(val), ans);
    }
  }

  let ans = [];
  if (!root) return ans;
  dfs(root, root.val, [root.val], ans);
  return ans;
};