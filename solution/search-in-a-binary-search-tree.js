/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

/*
  遍历二叉搜索树：
  由于二叉搜索树的特点为：每一个节点值小于它的左节点值，大于它的右节点的值
  那么我们从根节点出发：
    1. 一旦遇到等于 val 的节点，直接返回该节点即可
    2. 当前节点值小于目标值，在节点的右子树上继续搜索
    3. 当前节点值大于目标值，在节点的左子树上继续搜索
  
  最后如果没有符合条件的树，返回 null
*/
var searchBST = function (root, val) {
  let ans = null;

  function recursion(node) {
    if (ans) return;
    if (node === null) return;

    if (node.val === val) ans = node;
    if (node.val < val) recursion(node.right);
    if (node.val > val) recursion(node.left);
  }

  recursion(root);

  return ans;
};