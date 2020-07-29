/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */

/*
  滑动窗口
*/
var numOfSubarrays = function (arr, k, threshold) {
  if (arr.length < k) return 0;

  let ans = 0,
    len = arr.length,
    sum = 0,
    target = threshold === 0 ? 0 : k * threshold;

  for (let i = 0; i < k; i++) sum += arr[i];

  if (sum >= target) ans++;

  for (let i = k; i < len; i++) {
    sum -= arr[i - k];
    sum += arr[i];
    if (sum >= target) {
      ans++;
    }
  }

  return ans;
};