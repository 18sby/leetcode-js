/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  二分查找
  
  重点：每次二分之前，先判断左右指针的值是否与他们向中间走一步的元素相等，
  如果是的话，就移动指针，然后在进行普通的二分查找就可以了，
  否则过不了这样的测试用例：
  
  [10,1,10,10,10] 把最小值包在了中间，有时候会搜索不到的
  
  也可以取巧，nums = [new Set(nums)] 把它排序了一下 😁，不过不推荐
*/
var findMin = function (nums) {
  let ans = Infinity,
    low = 0,
    high = nums.length - 1;

  while (low <= high) {
    while (nums[low] === nums[low + 1] && low <= high) low++;
    while (nums[high] === nums[high - 1] && high >= low) high--;

    let mid = low + ((high - low) >> 1);

    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      high = mid - 1;
    }
  }

  return ans;
};