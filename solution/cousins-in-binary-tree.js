/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

/*
  BFS层层遍历，储存每层的深度和每个节点的父节点值
  queue 中的元素 [当前节点，节点深度，父节点的值]
*/
var isCousins = function (root, x, y) {
  let queue = [[root, 0, 0]], deep = 0, x_node = null, y_node = null;

  while (queue.length !== 0 && (x_node === null || y_node === null)) {
    let size = queue.length;
    deep++;

    while (size !== 0 && (x_node === null || y_node === null)) {
      let offer = queue.shift();
      size--;

      if (offer[0] && offer[0].val === x) {
        x_node = offer;
      }
      if (offer[0] && offer[0].val === y) {
        y_node = offer;
      }

      if (offer[0] && offer[0].left) queue.push([offer[0].left, deep, offer[0].val]);
      if (offer[0] && offer[0].right) queue.push([offer[0].right, deep, offer[0].val]);
    }
  }

  return x_node[1] == y_node[1] && x_node[2] !== y_node[2];
};