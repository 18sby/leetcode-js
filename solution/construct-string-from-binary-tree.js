/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */

/*
  前序遍历顺序：根 -> 左 -> 右
  
  右子树为 null 括号可以省略，左子树为 null 不可省略
*/
var tree2str = function (t) {
  function ergodic(node) {
    if (node === null) return '';
    if (node.left === null && node.right === null) return `${ans}${node.val}`;
    if (node.right === null) return `${ans}${node.val}(${ergodic(node.left)})`;
    return `${ans}${node.val}(${ergodic(node.left)})(${ergodic(node.right)})`
  }

  let ans = '';

  return ergodic(t);
};