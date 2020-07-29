/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
  BFS + DFS
  BFS 层次遍历二叉树，一旦发现有和链表头部相等的节点值，开始DFS
*/
var isSubPath = function (head, root) {
  let queue = [], ans = false, arr = [];

  if (root === null || head === null) return false;

  while (head && head.val) {
    arr.push(head.val);
    head = head.next;
  }

  queue.push(root);

  while (queue.length > 0 && ans === false) {
    let size = queue.length;
    while (size > 0) {
      let offer = queue.shift();

      if (offer.val === arr[0]) dfs([], offer);
      if (offer.left) queue.push(offer.left);
      if (offer.right) queue.push(offer.right);

      size--;
    }
  }

  function dfs(curr, node) {
    if (node) {
      curr.push(node.val);
    } else {
      return;
    }

    if (curr.length === arr.length) {
      return ans = true;
    }

    let len = curr.length;
    if (node.left && node.left.val === arr[len]) {
      dfs(JSON.parse(JSON.stringify(curr)), node.left);
    }
    if (node.right && node.right.val === arr[len]) {
      dfs(JSON.parse(JSON.stringify(curr)), node.right);
    }
  }

  return ans;
};