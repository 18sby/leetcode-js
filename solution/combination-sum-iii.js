/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

/*
  思路：
  1.建立一个 1 - 9 的数组，作为备选
  2.回溯：注意，只能向后选，不要选完 3，再去选择 1 或 2，会造成重复
  3.优化：如果当前和已经超过 n 了，那么直接结束此次递归即可(可节约一大部分时间)
*/
var combinationSum3 = function (k, n) {
  let ans = [],
    nums = [];

  // 建立备选数组
  for (let i = 1; i <= 9; i++) {
    nums.push(i);
  }

  // 回溯
  function backtrack(curr, temp) {
    let sum = curr.reduce((p, c) => {
      return p + c;
    }, 0);
    // 如果当前数组的值已经超过 n 了，那么直接结束递归即可(因为都是正整数，再继续加，也只会更大，不会找到满足条件的解了)
    if (sum > n) return;

    // 如果长度够了，判断是否符合条件，结束递归
    if (curr.length === k && sum === n) {
      ans.push(JSON.parse(JSON.stringify(curr)));
      return;
    }

    // 回溯
    for (let i = 0; i < temp.length; i++) {
      curr.push(temp[i]);
      backtrack(curr, temp.slice(i + 1));
      curr.pop();
    }
  };
  backtrack([], nums);

  return ans;
};