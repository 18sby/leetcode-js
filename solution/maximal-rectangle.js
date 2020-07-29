/**
 * @param {character[][]} matrix
 * @return {number}
 */

/*
  将每一行转化为柱状图，然后以每一行为底，使用上一题的方法，最后求出一个最大值
*/
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0;
  let maxArea = 0;

  var largestRectangleArea = function (heights) {
    let k = 0,
      stack = [];

    while (k <= heights.length) {
      if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[k]) {
        stack.push(k++); // 相当于 stack.push(k); k = k + 1;
      }
      else {
        let height = heights[stack.pop()];
        let width = stack.length === 0 ? k : k - stack[stack.length - 1] - 1;

        maxArea = Math.max(maxArea, height * width);
      }
    }
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let top = i === 0 ? 0 : Number(matrix[i - 1][j]);
      matrix[i][j] = matrix[i][j] === '0' ? 0 : top + 1;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    largestRectangleArea(matrix[i]);
  }

  return maxArea;
};