/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, flag = true) {
  let l = 0, r = s.length - 1;

  while (l < r && s.charAt(l) === s.charAt(r)) {
    l++;
    r--;
  }
  if (l >= r) return true;
  if (flag) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false);
  return false;
};