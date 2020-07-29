/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let ans = 0;

  if (num === 0) return ans;

  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
    ans++;
  }

  return ans;
};