/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */

/*
  1. 利用队列 BFS 层层遍历
  2. 遍历到 d - 1 层的时候，这层的所有节点设置新的左右子树为值为 v 的节点，然后
     把这个节点的原有左子树，挂到新节点的左子树上
     把这个节点的原有右子树，挂到新节点的右子树上
*/
var addOneRow = function (root, v, d) {
  if (!root) return root;
  let floor = 1, queue = [];

  if (d - 1 === 0) {
    let originRoot = root;
    let newRoot = new TreeNode(v);
    newRoot.left = originRoot;
    root = newRoot;
    queue.push(root.left);
  } else {
    queue = [root];
  }

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      let offer = queue.shift();
      let originLeft = offer.left;
      let originRight = offer.right;
      if (floor === d - 1) { // 到了该处理的层了
        offer.left = new TreeNode(v);
        offer.left.left = originLeft;
        offer.right = new TreeNode(v);
        offer.right.right = originRight;
      }
      if (offer && offer.left) queue.push(offer.left);
      if (offer && offer.right) queue.push(offer.right);
      size--;
    }
    floor++;
  }

  return root;
};