/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

/*
  1. 两棵树分别进行中序遍历，放到分别放到数组中
  2. 用两个指针对两个数组进行合并
*/
var getAllElements = function(root1, root2) {
  let arr1 = [], arr2 = [], ans = [];
  
  const bst = (node, arr) => {
    if (!node) return ;
    bst(node.left, arr);
    arr.push(node.val);
    bst(node.right, arr);
  }
  
  bst(root1, arr1);
  bst(root2, arr2);
  
  // 排序放入 ans 中
  let i = 0, j = 0, len1 = arr1.length, len2 = arr2.length;
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i++]);
    } else {
      ans.push(arr2[j++]);
    }
  }
  
  if (i < len1) ans = ans.concat(arr1.slice(i));
  if (j < len2) ans = ans.concat(arr2.slice(j));
  
  return ans;
};