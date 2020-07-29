/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

/*
  迭代法
  思路就是用一个栈，遍历当前节点的时候，把所有孩子逆序入栈，
  这样就可保证，每次从栈顶取出的节点必然是从左到右的顺序
*/
var preorder = function (root) {
  let ans = [], stack = [];

  stack.push(root);

  while (stack.length > 0) {
    let offer = stack.pop();
    if (offer === null) continue;
    ans.push(offer.val);

    if (offer.children !== null) {
      for (let i = offer.children.length - 1; i >= 0; i--) {
        stack.push(offer.children[i]);
      }
    }
  }

  return ans;
}

/*
  递归法 80ms
*/
var preorder = function (root) {
  let ans = [];

  function recursion(node) {
    if (node === null) return;

    ans.push(node.val);
    if (node.children !== null) {
      for (let i = 0; i < node.children.length; i++) {
        recursion(node.children[i]);
      }
    }
  }

  recursion(root);

  return ans;
};