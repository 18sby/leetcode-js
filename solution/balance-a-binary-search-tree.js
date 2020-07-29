/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
  思路：
  1.中序遍历二叉搜索树，存到一个数组中，数组是升序的(因为二叉搜索树的特性)
  2.层层构建二叉搜索树，每次以中位数为根节点，这样树就是最趋近平衡的
*/
var balanceBST = function (root) {
  function bst(node) {
    if (node === null) return;
    bst(node.left);
    nodes.push(node.val);
    bst(node.right);
  }

  let nodes = [];
  bst(root);

  function build(arr) {
    if (arr.length === 0) return null;

    let mid = Math.floor(arr.length / 2);

    if (arr[mid] === undefined) return;

    const root = new TreeNode(arr[mid]);

    root.left = build(arr.slice(0, mid));
    root.right = build(arr.slice(mid + 1));

    return root;
  }

  let newNode = build(nodes);

  return build(nodes);
};