/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  迭代查找，节省内存
*/
var search = function (nums, target) {
  let ans = -1,
    low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      ans = mid;
      break;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return ans;
}

/*
  思路：
  数组的某一段是排好序的，我们直接进行二分搜索，每次搜索之后如果中间值不等于目标值
  我们判断：
    - nums[low] < nums[mid] ? 
      - yes => 左边为排好序的数组
        target 在左边 ？
        - yes => 查找左边
        - no  => 查找右边
        
      - no => 右边为排好序的数组
        target 在右边 ？
        ...
        ...
*/
var search = function (nums, target) {
  function binarySearch(low, high) {
    if (low > high) return -1;

    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) { return mid };

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        return binarySearch(low, mid - 1);
      } else {
        return binarySearch(mid + 1, high);
      }
    } else {
      if (nums[high] >= target && target > nums[mid]) {
        return binarySearch(mid + 1, high);
      } else {
        return binarySearch(low, mid - 1);
      }
    }
  }

  return binarySearch(0, nums.length - 1);
};