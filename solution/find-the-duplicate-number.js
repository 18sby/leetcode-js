/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  快慢指针，第一次在环内相遇
  第二次找到环的入口
*/
var findDuplicate = function (nums) {
  let slow = nums[0],
    fast = nums[0];

  slow = nums[slow];
  fast = nums[nums[fast]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  fast = slow;
  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};