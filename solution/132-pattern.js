/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  官方题解思路：
  1.建立一个nums[i]之前最小的元素数组
  2.从后向前遍历：
    如果 stack 为空，那么把他 push 进去
    如果 min[i] < nums[i]
      如果 stack 的栈顶元素 小于 min[i]，那么 pop 掉
      如果 stack 的栈顶元素 大于 min[i]，同时 小于 nums[i] => 找到 132 模式，跳出循环，返回true
      否则 把 nums[i] push 到 stack 中
*/
var find132pattern = function (nums) {
  let stack = [],
    min = [],
    len = nums.length,
    num = Infinity,
    ans = false;

  for (let i = 0; i < len; i++) {
    if (nums[i] < num) {
      num = nums[i];
    }
    min[i] = num;
  }

  for (let i = len - 1; i >= 0; i--) {
    if (stack.length === 0) {
      stack.push(nums[i]);
    }
    else {
      if (min[i] < nums[i]) {
        while (stack.length > 0 && stack[stack.length - 1] <= min[i]) stack.pop();
        let top = stack[stack.length - 1];
        if (top > min[i] && top < nums[i]) {
          ans = true;
          break;
        }
        else {
          stack.push(nums[i]);
        }
      }

    }
  }

  return ans;
};