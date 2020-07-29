/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

/*
  迭代思路：如果小于根节点的值，那么插入到左子树中，如果大于根节点的值，那么插入到右子树中
*/
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  let curr = root;
  while (curr) {
    if (val < curr.val) {
      if (curr.left) {
        curr = curr.left;
      } else {
        curr.left = new TreeNode(val);
        return root;
      }
    } else {
      if (curr.right) {
        curr = curr.right;
      } else {
        curr.right = new TreeNode(val);
        return root;
      }
    }
  }
  return root;
};