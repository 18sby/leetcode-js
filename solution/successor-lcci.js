/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

/*
  左 - 根 - 右 => 中序遍历
  遇到节点返回后面的节点即可
  
  1. 中序遍历二叉搜索树
  2. 使用一个额外的 布尔变量 记录当前是否找到了等于 p 的节点，找到后把 findCurr 赋值为 true
  3. 遇到下一个节点判断 ans === null && findCurr === true，给 ans 赋值为当前的节点，返回
*/
var inorderSuccessor = function (root, p) {
  function recursion(node) {
    if (!node) return;

    recursion(node.left);

    if (findCurr === true && ans === null) {
      ans = node;
      return;
    }
    if (node === p) {
      findCurr = true;
    }

    recursion(node.right);
  }

  let findCurr = false,
    ans = null;

  recursion(root);

  return ans;
};