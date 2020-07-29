/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

/*
  思路：
  1. BFS 层层遍历树
  2. 把每一个节点指向它的下一个节点
*/
var connect = function (root) {
  let queue = [];

  if (root) queue.push(root);

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      let offer = queue.shift();
      offer.next = size - 1 > 0 ? queue[0] : null;
      if (offer && offer.left) queue.push(offer.left);
      if (offer && offer.right) queue.push(offer.right);
      size--;
    }
  }

  return root;
};