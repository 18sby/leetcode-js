/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */

/*
  首先观察出重叠的条件：符合条件的情况，一个矩形完全在另一个矩形的上、下、左、右、侧
*/
var isRectangleOverlap = function (rec1, rec2) {
  return !(rec1[3] <= rec2[1] || rec1[0] >= rec2[2] || rec1[1] >= rec2[3]
    || rec1[2] <= rec2[0]);
};