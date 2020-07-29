/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  /*
    二分查找：找到并返回 false 后的第一个 true
  */
  return function (n) {
    let low = 0,
      high = n,
      ans = null;

    while (low <= high) {
      let mid = low + ((high - low) >> 1);

      if ((isBadVersion(mid) && !isBadVersion(mid - 1)) ||
        (isBadVersion(mid) && mid === 0)) {
        ans = mid;
        break;
      }

      if (isBadVersion(mid)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return ans;
  };
};