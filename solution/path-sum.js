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
 * @return {boolean}
 */

/*
  从根节点开始 dfs，一旦找到符合条件的路径，终止递归，返回 true 即可，
  否则，最后返回 false
*/
var hasPathSum = function (root, sum) {
  function dfs(curr, node) {
    if (node === null) return;
    curr += node.val;

    if (curr === sum && !node.left && !node.right) {
      return ans = true;
    }

    if (node.left) dfs(curr, node.left);
    if (node.right) dfs(curr, node.right);
  }

  let ans = false;

  dfs(0, root);

  return ans;
};