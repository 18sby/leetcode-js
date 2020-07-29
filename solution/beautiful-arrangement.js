/**
 * @param {number} N
 * @return {number}
 */

/*
  参考官方题解，针对暴力回溯方法进行优化
  还是回溯，只不过增加两个想法：
  - 先计算出每个位置只可以放哪几个数字
  - 在回溯的过程中判断哪个数字用过了，就不可以用了，别忘了取完数之后释放它的状态
*/
var countArrangement = function (N) {
  if (N === 0) return 0;
  let ans = 0,
    map = new Map(),
    checkMap = new Map();

  // 构建一个 1 - N 的数组
  // 同时构建出一个各个位置可以放置数字的 「位置 -> 可放值数组」 的 map 结构
  for (let i = 1; i <= N; i++) {
    checkMap.set(i, true);
    let temp = [];
    for (let j = 1; j <= N; j++) {
      if (j % i === 0 || i % j === 0) temp.push(j);
    }
    map.set(i, temp);
  }

  function backtrack(curr) {
    // 判断满足条件，统计一次，退出此次递归
    if (curr.length === N) {
      ans++;
      return;
    }

    // curr的长度不够，继续拿下一个位置的数
    let need = map.get(curr.length + 1);
    /*
      这里的过程稍微复杂一点，逐行解释：
      - 首先判断这个数字使用过没有，如果使用过就不能在使用了，直接跳过
      - 把这个数字放到 curr 中
      - 设置这个数字为不可使用
      - 继续递归
      - 要把刚才使用的数字从 curr 中 pop 掉
      - 同时设置这个数字可使用，继续回溯
    */
    for (let i = 0; i < need.length; i++) {
      if (checkMap.get(need[i]) === false) continue;
      curr.push(need[i]);
      checkMap.set(need[i], false);
      backtrack(curr);
      curr.pop();
      checkMap.set(need[i], true);
    }

  };
  backtrack([]);

  return ans;
};

/*
  1208ms
  思路：边回溯边统计
  [1,2,3,4] 
*/
var countArrangement = function (N) {
  if (N === 0) return 0;
  let arr = [],
    ans = 0;

  // 构建一个 1 - N 的数组
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  function backtrack(curr, nums) {
    // 判断 curr 不为空，并且最后一位元素满足优美数的条件，优美数组加 1
    if (curr.length === N && (curr.length % curr[curr.length - 1] === 0 || curr[curr.length - 1] % curr.length === 0)) {
      ans++;
    }

    // 如果不满足优美数条件或者 nums 为空，直接终止此次递归即可
    if (
      nums.length === 0
      ||
      (curr.length !== 0 && curr.length % curr[curr.length - 1] !== 0 && curr[curr.length - 1] % curr.length !== 0)
    ) {
      return;
    }

    // 遍历 nums 数组，从左到右拿数，别忘了 pop 掉，继续回溯
    for (let i = 0; i < nums.length; i++) {
      curr.push(nums[i]);
      backtrack(curr, nums.slice(0, i).concat(nums.slice(i + 1)));
      curr.pop();
    }
  };
  backtrack([], arr);

  return ans;
};