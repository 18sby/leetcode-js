/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
  先排序，再使用双指针
*/
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let ans = [],
    p1 = 0,
    p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      ans.push(nums1[p1]);
      p1++;
      p2++;
    }
    else if (nums1[p1] < nums2[p2]) {
      p1++;
    }
    else {
      p2++;
    }
  }

  return ans;
}

/*
  最慢的方法：使用两个对象，最后对比，填入数组，去重
*/
var intersect = function (nums1, nums2) {
  let map1 = new Map(),
    map2 = new Map(),
    len1 = nums1.length,
    len2 = nums2.length,
    len = Math.max(len1, len2),
    ans = [];

  for (let i = 0; i < len; i++) {
    if (i < len1) {
      if (!map1.has(nums1[i])) {
        map1.set(nums1[i], 1);
      }
      else {
        map1.set(nums1[i], map1.get(nums1[i]) + 1);
      }
    }

    if (i < len2) {
      if (!map2.has(nums2[i])) {
        map2.set(nums2[i], 1);
      }
      else {
        map2.set(nums2[i], map2.get(nums2[i]) + 1);
      }
    }
  }

  for (let [k, v] of map1) {
    if (map2.has(k) && v > 0) {
      let newArr = new Array(Math.min(map2.get(k), v));
      newArr.fill(k)
      ans.push(...newArr);
    }
  }

  return ans;
};