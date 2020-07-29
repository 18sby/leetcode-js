/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 回溯 递归
var combinationSum2 = function (candidates, target) {
  let list = [];
  backFind(list, [], candidates.sort((a, b) => a - b), target, 0);
  return list;
};

var backFind = function (list, tempList, nums, target, start) {
  if (target < 0) return;
  else if (target === 0) return list.push([...tempList]);
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] == nums[i - 1]) continue;
    tempList.push(nums[i]);
    backFind(list, tempList, nums, target - nums[i], i + 1);
    tempList.pop();
  }
}