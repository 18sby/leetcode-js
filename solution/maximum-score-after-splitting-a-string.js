/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let left = 0, right = 0, n = s.length;

  if (n > 0 && s.charAt(0) === '0') left++;

  for (let i = 1; i < n; i++) {
    let v = s.charAt(i);
    if (v === '1') right++;
  }

  let max = left + right;

  for (let i = 1; i < n - 1; i++) {
    let v = s.charAt(i);
    if (v === '0') left++;
    if (v === '1') right--;
    max = Math.max(max, left + right);
  }

  return max;
};