/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return !s.trim() ? 0 : s.trim().split(' ').filter(Boolean).length;
};