/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/*
  递归解法：
  
  前序遍历的第一个节点定然是当前树的根节点，我们拿它把中序遍历劈开，左边的数组定然全部
  都是当前根节点的左子树上的节点，右边的数组定然全部都是当前根节点的右子树上的节点，
  继续去递归即可。
  
  然后拿左右两个数组分别去建立左子树和右子树即可。。。一直递归
*/
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);

  let rootIndex = inorder.findIndex(item => item === preorder[0]);
  if (rootIndex === -1) return null;
  preorder.shift();

  root.left = buildTree(preorder, inorder.slice(0, rootIndex));
  root.right = buildTree(preorder, inorder.slice(rootIndex + 1));

  return root;
};