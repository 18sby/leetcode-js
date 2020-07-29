/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

/*
  1.遍历二叉树，存放到数组中s
  2.排序 从小到大
  3.返回 k - 1 的值
*/
var kthSmallest = function (root, k) {
  let ary = [];

  var recursion = function (tree) {
    if (tree) {
      ary.push(tree.val);
    }
    if (tree.left) {
      recursion(tree.left);
    }
    if (tree.right) {
      recursion(tree.right);
    }
  }
  recursion(root);

  ary.sort((a, b) => a - b);

  return ary[k - 1];

};