/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 与46题是一样的，只是多了去重，这里使用回溯法
var permuteUnique = function (nums) {
  var backstack = function (aries, temp) {
    if (aries.length === 0) {
      res.push(JSON.parse(JSON.stringify(temp)));
    }
    else {
      for (let i in aries) {
        if (i > 0 && aries[i] === aries[i - 1]) { // 判断去重
          continue;
        }
        else {
          temp.push(aries[i]);
          backstack(aries.slice(0, i).concat(aries.slice(+(i) + 1)), temp);
        }
      }
    }
    if (temp.length === 0) return;
    temp.pop();
  };

  let res = [];
  nums.sort((a, b) => a - b);
  backstack(nums, []);
  return res;
};