/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  if (matrix.length === 1) return matrix[0].indexOf(target) !== -1;
  let row = matrix.length,
    col = matrix[0].length;

  let left = 0,
    right = row - 1;
  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);
    if (matrix[mid][0] <= target && matrix[mid][col - 1] >= target) {
      left = mid;
      break;
    }
    else if (matrix[mid][0] >= target) {
      right = mid - 1;
    }
    else if (matrix[mid][col - 1] <= target) {
      left = mid;
    }
  }
  return matrix[left].indexOf(target) !== -1;
};