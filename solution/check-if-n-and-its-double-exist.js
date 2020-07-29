/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function (arr) {
  arr.sort((a, b) => a - b);

  let ans = false,
    len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] * 2 === arr[i] && i !== j) {
        ans = true;
        break;
      }
    }
    if (ans === true) break;
  }

  return ans;
};