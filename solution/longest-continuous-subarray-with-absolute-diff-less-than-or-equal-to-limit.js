/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

/*
  开始审题审错了，但意外通过了，现在抄袭了这位老哥的思路：地址
  
  滑动窗口：保证窗口内最大值与最小值的绝对差 <= limit
  
  解释下思路：
  
  1. 使用双指针代表滑动窗口，始终保证窗口内的最大、最小值的绝对差 <= limit
  2. 使用两个队列：
     min: 升序的数组，第一个元素永远是当前窗口内的最小值
     max: 降序的数组，第一个元素永远是当前窗口内的最大值
  3. 右指针(也就是滑动窗口的右边界)右移的时候不断比较当前遇到这个值是否比 max 数组
     的最后一个元素要大，如果是，就把最后一个元素 pop 掉，因为如果后续窗口的最大、最小
     值的绝对差 > limit 了，那么左指针肯定要右移，但是因为 pop 掉的值的索引既在
     当前值的左边，又比当前值小，所以当左指针右移，收缩窗口的时候，这些 pop 掉的值
     也没有可能会作为窗口收缩 n 次后的最大值；min 数组也是同理进行比较和维护
*/
var longestSubarray = function (nums, limit) {
  let ans = 1, n = nums.length,
    start = 0, end = 1,
    min = [nums[0]], max = [nums[0]];

  while (end < n) {
    while (min.length > 0 && min[min.length - 1] > nums[end]) min.pop();
    while (max.length > 0 && max[max.length - 1] < nums[end]) max.pop();

    min.push(nums[end]);
    max.push(nums[end]);

    while (Math.abs(max[0] - min[0]) > limit) {
      if (min[0] === nums[start]) min.shift();
      if (max[0] === nums[start]) max.shift();
      start++;
    }

    ans = Math.max(ans, end - start + 1);
    end++;
  }

  return ans;
};