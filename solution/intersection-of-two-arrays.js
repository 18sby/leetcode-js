/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
  使用 includes + filter
*/
var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter(v => {
    return nums2.includes(v);
  }))];
}

/*
  使用 filter + indexOf
*/
var intersection = function (nums1, nums2) {
  let ans = nums1.filter(v => {
    return nums2.indexOf(v) > -1;
  })

  return [...new Set(ans)];
}

/*
  使用一个 map 来判断
*/
var intersection = function (nums1, nums2) {
  let map = new Map(), ans = [];

  for (let v of nums1) {
    if (!map.has(v)) {
      map.set(v, 1);
    }
  }

  for (let v of nums2) {
    if (map.has(v)) {
      ans.push(v);
    }
  }

  return [...new Set(ans)];
};