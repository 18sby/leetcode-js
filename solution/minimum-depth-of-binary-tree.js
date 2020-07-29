/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
  BFS 遍历二叉树，一旦遇到节点的左右子节点都为 null，那么此时的深度就是最小深度
*/
var minDepth = function (root) {
  let deep = 0, queue = [], isEnd = false;

  if (root !== null) {
    deep = 1;
    queue.push(root);
  }

  while (queue.length > 0 && !isEnd) {
    let size = queue.length;
    while (size > 0) {
      let offer = queue.shift();
      if (!offer.left && !offer.right) {
        isEnd = true;
        break;
      }

      if (offer.left) queue.push(offer.left);
      if (offer.right) queue.push(offer.right);
      size--;
    }

    if (size === 0) deep += 1;
  }

  return deep;
};