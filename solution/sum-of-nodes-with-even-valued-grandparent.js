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
  层次遍历二叉树，每个节点都保留着自己的父节点和祖父节点的值，如果祖父节点值为偶数，
  那么统计此节点的值
  
  队列中的每个元素结构[祖父节点的值，父节点的值，当前节点]
*/
var sumEvenGrandparent = function (root) {
  let queue = [], count = 0;

  queue.push([null, null, root]);

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      size--;
      let [grandFather, father, node] = queue.shift();

      if (node === null) continue;

      if (grandFather !== null && grandFather % 2 === 0) {
        count += node.val;
      }

      if (node.left) {
        queue.push([father, node.val, node.left]);
      }

      if (node.right) {
        queue.push([father, node.val, node.right]);
      }
    }
  }

  return count;
};