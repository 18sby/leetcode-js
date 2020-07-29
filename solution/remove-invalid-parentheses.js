/**
 * @param {string} s
 * @return {string[]}
 */

/*
  BFS：
  
  每一种尝试进入队列要去重，使用 map，比 indexOf 判断快一些
  
  比如这个测试用例：")(((((((("
  
  我们删除案例中的哪一个左括号，剩余的字符串都是一样的，如果我们不去重，那么
  ")(((((((" 这个字符串就会进入队列 7 次，更何况，下一次基于这 7 个字符串计算
  又会产生 ")((((((" 6 个这样的字符串，无用的计算量太大，所以牺牲一点空间，把大量的
  无用计算剪掉，也就是利用 map 去重了，使用 Map 还是 Object 都可以，总之都是哈希，
  因为我们这里的键值都是字符串而已，没必要用到 Map 结构，Object 足够了
  
  队列每一项存储的数据 [当前尝试的字符串, 它的左括号数量， 它的右括号数量]
  在遍历队列每一项过程中的计算逻辑：
  1. 此时的字符串中 右括号 多于 左括号，尝试分别删除字符串中的每一个右括号，入队列
  2. 此时的字符串中 左括号 多于 右括号，尝试分别删除字符串中的每一个左括号，入队列
  3. 此时的字符串中 左右括号相等并且为 0，没有括号了，什么也不做
  4. 此时的字符串中 左右括号相等并且不为 0，尝试删除每一个括号去尝试，入队列
  
  注意：因为题目要求的是“删除最小数量的无效括号”，所以我们在每一层 BFS 的尝试过程中
  一旦在这一层找到一个有效的结果，那么遍历完这一层我们就可以终止 BFS 了，因为我们每一层
  的字符串长度是相等的。
  
  👆上面这种 BFS 记录当前的字符串的左、右括号数量的好处：
  当左括号数量大于有括号数量的时候，我们只会删除左括号去尝试，不会进行「傻傻地去删除
  右括号进行尝试」这样的无用操作。
*/
var removeInvalidParentheses = function (s) {
  if (s.length === 0) return [''];
  if (s.indexOf(')') === -1 && s.indexOf('(') === -1) return [s];
  if (isValid(s)) return [s];

  // 初始化 s 中的左右括号数量
  let init_brackets_left = 0, init_brackets_right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') init_brackets_left++;
    if (s.charAt(i) === ')') init_brackets_right++;
  }

  // function: 判断字符是否为有效字符串
  function isValid(str) {
    let flag = true, leftNums = 0, rightNums = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str.charAt(i);
      if ('()'.indexOf(c) === -1) continue;
      if (c === '(') leftNums++;
      if (c === ')') rightNums++;
      if (rightNums > leftNums) {
        flag = false;
        break;
      }
    }
    if (leftNums !== rightNums) flag = false;
    return flag;
  }


  let queue = [[s, init_brackets_left, init_brackets_right]],
    isFindResCurrFloor = false,
    map = {},
    ans = new Set(),
    brackets = '()';

  // BFS 开始
  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      size--;

      let [str, left_nums, right_nums] = queue.shift();

      // 先判断是否有效
      if (isValid(str)) {
        ans.add(str);
        isFindResCurrFloor = true;
      }

      // 如果已经找到有效解了，那么就不用再往下一层尝试了
      if (!isFindResCurrFloor) {
        if (left_nums > right_nums) {
          for (let i = 0; i < str.length; i++) {
            let c = str.charAt(i);
            if (c !== '(') continue;
            let nextTarget = str.slice(0, i).concat(str.slice(i + 1));
            if (map[nextTarget] === undefined) {
              map[nextTarget] = 1;
              queue.push([nextTarget, left_nums - 1, right_nums]);
            }
          }
        } else if (left_nums < right_nums) {
          for (let i = 0; i < str.length; i++) {
            let c = str.charAt(i);
            if (c !== ')') continue;
            let nextTarget = str.slice(0, i).concat(str.slice(i + 1));
            if (map[nextTarget] === undefined) {
              map[nextTarget] = 1;
              queue.push([nextTarget, left_nums, right_nums - 1]);
            }
          }
        } else if (left_nums === 0 && right_nums === 0) {

        } else {
          for (let i = 0; i < str.length; i++) {
            let c = str.charAt(i);
            if (c === '(') {
              let nextTarget = str.slice(0, i).concat(str.slice(i + 1));
              if (map[nextTarget] === undefined) {
                map[nextTarget] = 1;
                queue.push([nextTarget, left_nums - 1, right_nums]);
              }
            } else if (c === ')') {
              let nextTarget = str.slice(0, i).concat(str.slice(i + 1));
              if (map[nextTarget] === undefined) {
                map[nextTarget] = 1;
                queue.push([nextTarget, left_nums, right_nums - 1]);
              }
            }
          }
        }
      }
    }

    if (isFindResCurrFloor) break;
  }

  return [...ans];
};