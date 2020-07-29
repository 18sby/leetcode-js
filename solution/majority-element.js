/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  哈希记录：如果统计到某个数的出现次数大于 n/2，直接返回
*/
var majorityElement = function (nums) {
  let map = {}, ans = null, n = nums.length;

  for (let i = 0; i < n; i++) {
    let c = nums[i];
    if (map[c] === undefined) {
      map[c] = 1;
    } else {
      map[c]++;
    }

    if (map[c] > n / 2) {
      ans = c;
      break;
    }
  }

  return ans;
};