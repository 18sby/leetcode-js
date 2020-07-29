/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */

/*
  找到水平方向和竖直方向最大的间隔，相乘即可
*/
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0, h);
  verticalCuts.push(0, w);

  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let rowGap = 0, colGap = 0;
  for (let i = 1; i < horizontalCuts.length; i++) {
    rowGap = Math.max(horizontalCuts[i] - horizontalCuts[i - 1], rowGap);
  }
  for (let i = 1; i < verticalCuts.length; i++) {
    colGap = Math.max(verticalCuts[i] - verticalCuts[i - 1], colGap);
  }

  return rowGap * colGap % (1e9 + 7);
};