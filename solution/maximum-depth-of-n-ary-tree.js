/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */

/*
  跟二叉树的最大深度唯一的区别就是，二叉树比较两个子树 left 和 right 中
  较大深度的那个，多叉树比较 children 中的所有子树中最大深度的那个
*/
var maxDepth = function (root) {
  function maxdepth(node) {
    if (node === null) return 0;

    let max = -Infinity;
    for (let i = 0; i < node.children.length; i++) {
      max = Math.max(max, maxdepth(node.children[i]));
    }

    return max === -Infinity ? 1 : max + 1;
  }

  return maxdepth(root);
};