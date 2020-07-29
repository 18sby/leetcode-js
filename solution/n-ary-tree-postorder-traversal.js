/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

/*
  迭代法：
  后续遍历顺序：左 - 右 - 根
  多叉树的话也是孩子从左到右，然后根的顺序
  
  所以用栈处理的话，入栈就要从后向左，逆序入栈，去栈顶元素的时候，就是从左到右的顺序了
  注意一点就可以：当栈顶元素的还有 children 的话，那么不能取出他，要先把它的孩子节点
  入栈，并把它的孩子设置为空，遇到没有孩子的节点再添加到结果数组中
*/
var postorder = function (root) {
  let ans = [], stack = [root];

  while (stack.length > 0) {
    let top = stack[stack.length - 1],
      topIndex = stack.length - 1;

    if (top === null) {
      stack.pop();
      continue;
    }

    if (top.children !== null) {
      for (let i = top.children.length - 1; i >= 0; i--) {
        stack.push(top.children[i]);
      }

      stack[topIndex].children = null;
    } else {
      ans.push(top.val);
      stack.pop();
    }
  }

  return ans;
};