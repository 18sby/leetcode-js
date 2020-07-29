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
  使用队列层层遍历，同一层的节点的 next 指针指向它后面的兄弟节点，每一层最后的节点
  的 next 指针指到 null
*/
var connect = function (root) {
  if (!root) return root;
  let queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      size--;
      let offer = queue.shift();

      if (offer) {
        if (size === 0) {
          offer.next = null;
        } else {
          offer.next = queue[0];
        }
      }

      if (offer && offer.left) queue.push(offer.left);
      if (offer && offer.right) queue.push(offer.right);
    }
  }

  return root;
};