/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map(),
    checkRepeatMap = new Map(),
    ans = true;

  for (let i = 0, len = arr.length; i < len; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    }
    else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  for (let [k, v] of map) {
    if (!checkRepeatMap.has(v)) {
      checkRepeatMap.set(v, 1);
    }
    else {
      ans = false;
      break;
    }
  }

  return ans;
};