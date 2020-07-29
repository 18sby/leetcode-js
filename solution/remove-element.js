/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 思路：遍历数组，如果等于val，删除此项，当前索引执行 i-- ( 击败60% )
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// 思路：看了作者灵魂牧码对leetCode检测机制的解释，发现并不需要删除数组，
//      leetCode会根据你返回的长度，去数组中检测到此长度是否正确，所以可以优化掉删除数组项的操作
// !!!: 好奇怪去掉了splice的步骤，甚至更慢了一点
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[n] = nums[i];
      n++;
    }
  }
  return n;
}