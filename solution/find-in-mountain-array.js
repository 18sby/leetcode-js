/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

/*
  1. 先查找峰值，对两边的区间进行二分
  2. 如果左边的区间找到解，返回
  3. 如果峰值等于 target ，返回峰值的下标
  4. 如果右边的区间找到解，返回下标
  5. 返回 -1
*/
var findInMountainArray = function (target, mountainArr) {
  // 查找峰值：left < target > right
  let left = 0, right = mountainArr.length() - 1, highIndex = null;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    let midValue = mountainArr.get(mid),
      r = mountainArr.get(mid + 1);

    if (midValue >= r) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  highIndex = left;

  // 在峰值左边的升序段中查找是否有 target
  left = 0, right = highIndex - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    let midValue = mountainArr.get(mid);

    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 判断峰值是否等于 target ，是则返回
  if (mountainArr.get(highIndex) === target) return highIndex;

  // 在峰值右边的降序段中查找是否有 target
  left = highIndex + 1, right = mountainArr.length() - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    let midValue = mountainArr.get(mid);

    if (midValue === target) {
      return mid;
    } else if (midValue > target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};