/**
 * @param {number} x
 * @return {number}
 */

/* 牛顿法 */
var mySqrt = function (x) {
  let root = x;
  while (root * root > x) {
    let pro = (root + x / root) / 2;
    if (pro === root) {
      break;
    }
    else {
      root = pro;
    }
  }
  return Math.floor(root);
}

/* 二分法 */
var mySqrt = function (x) {
  let left = 0,
    right = Math.ceil(x / 2);
  while (left < right) {
    let mid = Math.ceil((left + right + 1) / 2);
    let pro = mid * mid;
    if (pro > x) {
      right = mid - 1;
    }
    else {
      left = mid;
    }
  }
  return left;
};