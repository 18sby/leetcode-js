/**
 * @param {number[]} heights
 * @return {number}
 */

/*
  单调栈
  思路：维护一个单调栈，遍历数组，遇到比当前栈顶大的元素就压入栈(
    压入的是索引)，否则就取出栈顶元素进行计算：以当前栈顶元素为高度的
    最大矩形面积，此时的高是：栈顶元素的值，宽是：当前索引 - 1 - 栈顶元素的索引，
    画图好理解
    
  注意：最后一根柱子出栈后，发现栈为空，此时以这根柱子为最大高度的矩形面积的宽
  是整个 heights 数组的长度，也就是当时的 i，因为这种情况只有在最后才会出现一次，
  例如题目中的案例 [2,1,5,6,2,3] 1 是最后出栈的，
  它的宽度是 width = 6 = heights.length
*/
var largestRectangleArea = function (heights) {
  let i = 0,
    maxArea = 0,
    stack = [];

  for (let i = 0, len = heights.length; i <= len; i++) {
    while (stack.length > 0 && (heights[i] < heights[stack[stack.length - 1]] || i === len)) {
      let height = heights[stack.pop()],
        width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;

      maxArea = Math.max(maxArea, width * height);
    }

    stack.push(i);
  }

  return maxArea;
};

/*
  超时！！！
  暴力法：从左到右遍历，找每一个位置向两侧延伸最大的面积
         延伸到比当前位置小的数停止
*/
var largestRectangleArea = function (heights) {
  let result = 0,
    len = heights.length;

  for (let i in heights) {
    let left = i,
      right = i;
    while (left >= 0 && heights[left] >= heights[i]) {
      left = left - 1;
    }
    while (right < len && heights[right] >= heights[i]) {
      right++;
    }
    result = Math.max(result, (right - left - 1) * heights[i]);
  }

  return result;
};