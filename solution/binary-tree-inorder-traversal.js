/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
  迭代：利用队列
  
  1. 首先把根节点入队列
  2. 只要队列不为空，就一直迭代下去
  
  
  核心：3. 从队列中拿出节点的时候，看一下当前节点是否有左、右子节点
     如果有，那么构建一个临时队列：
     [当前节点的左子树，当前节点(把左右子树置空)，当前节点的右子树]
     
     置空是为了防止，下一次拿这个节点的时候它还有左、右子节点，按照
     上面的逻辑就死循环了
*/
var inorderTraversal = function (root) {
  if (!root) return [];
  let queue = [root], ans = [];

  while (queue.length > 0) {
    let offer = queue.shift();
    if (offer && !offer.left && !offer.right) {
      ans.push(offer.val);
    } else {
      let temp = [];
      if (offer && offer.left) temp.push(offer.left);
      let newOffer = new TreeNode(offer.val);
      temp.push(newOffer);
      if (offer && offer.right) temp.push(offer.right);
      queue.unshift(...temp);
    }
  }

  return ans;
}

/*
  递归 60ms
*/
var inorderTraversal = function (root) {
  let ans = [];

  function bst(node) {
    if (!node) return;
    bst(node.left);
    ans.push(node.val);
    bst(node.right);
  }

  bst(root);
  return ans;
};