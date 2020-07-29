/**
 * @param {number[]} digits
 * @return {string}
 */

/*
  贪心思想 + 分类讨论
  
  举例：[0,1,2,3,4,5,6,7,8,9] 
  
  1.首先按照数学规律来说，一个数各个位上的数相加是3的倍数，那么他就可以被3整除
  
  2.我们来分类，把题目给出的所有整数分成三个数组
    1) % 3 === 0 的，也即是本身是 3 的倍数的数
    2) % 3 === 1 的，
    3) % 3 === 2 的，
    
    分好类的三个数组：
      [0,3,6,9]
      [1,4,7]
      [2,5,8]
    
  3.首先我们肯定的是 模3等于0 的数组全部都要，他们依然是3的倍数 
    [0, 3, 6, 9] => 组合的一种方式 => '9630' 他一定是3的倍数
    
    我们采用逆向思维：假装先按照从大到小的顺序把题目给的所有数
    连在了一起：
    [0,1,2,3,4,5,6,7,8,9] => '9876543210'
    
    - 如果这个数模3余0的话，那刚好，所有数字我们都用上了，拼上返回答案即可
      '9876543210'
      
    - 如果这个数模3余1的话
      我们优先可以在模3余1的数组中删掉1个最小的数，
        · [1,4,7] 中删除1个最小的数，我们删除 1，再把剩余的数拼起来：'987654320'
      如果模3余1的数组不足1个数了，我们尝试在模3余2的数组中删除2个最小的数
        · [2,5,8] 中删除2个最小的数，我们删除 2 和 5，再把剩余的数拼起来
          ：'98764310'
      如果模3余2的数组不够2个数，此时上面两种策略都不能实现，那么无解，返回 ''
      
    - 如果这个数模3余2的话
      我们优先可以在模3余2的数组中删掉1个最小的数，
        · [2,5,8] 中删除2个最小的数，我们删除 2，再把剩余的数拼起来
          ：'987654310'，返回结果
      如果模3余2的数组不足1个数了，我们尝试在模3余1的数组中删除2个最小的数
        · [1,4,7] 中删除1个最小的数，我们删除 1 和 4，
          再把剩余的数拼起来：'98765320'
      如果模3余2的数组不够1个数，此时上面两种策略都不能实现，那么无解，返回 ''
      
  注意!!：上面的后两种情况，我们优先尝试删除1个数，因为删除1个数后剩余的数字
       一定比删除2个数剩余的数字要多，这样答案比较大
*/
var largestMultipleOfThree = function (digits) {
  let sum = digits.reduce((p, c) => {
    return p + c;
  }, 0);

  if (sum === 0 && digits.length !== 0) return '0';

  let map_1 = [], map_2 = [], map_0 = [];

  for (let i = 0, len = digits.length; i < len; i++) {
    let c = digits[i];
    if (c % 3 === 0) map_0.push(c);
    if (c % 3 === 1) map_1.push(c);
    if (c % 3 === 2) map_2.push(c);
  }

  if (sum % 3 === 0) {
    digits.sort((a, b) => b - a);
    return digits.join('');
  } else if (sum % 3 === 1) {
    if (map_1.length > 0) {
      map_1.sort((a, b) => b - a);
      map_1.pop();
      digits = [...map_0, ...map_1, ...map_2];
      digits.sort((a, b) => b - a);
      return digits.join('');
    } else if (map_2.length > 1) {
      map_2.sort((a, b) => b - a);
      map_2.pop();
      map_2.pop();
      digits = [...map_0, ...map_1, ...map_2];
      digits.sort((a, b) => b - a);
      return digits.join('');
    } else {
      return '';
    }
  } else if (sum % 3 === 2) {
    if (map_2.length > 0) {
      map_2.sort((a, b) => b - a);
      map_2.pop();
      digits = [...map_0, ...map_1, ...map_2];
      digits.sort((a, b) => b - a);
      return digits.join('');
    } else if (map_1.length > 1) {
      map_1.sort((a, b) => b - a);
      map_1.pop();
      map_1.pop();
      digits = [...map_0, ...map_1, ...map_2];
      digits.sort((a, b) => b - a);
      return digits.join('');
    } else {
      return '';
    }
  }
}

/*
  先来一波测试时候超时的大回溯！！ 第17个用例开始超时
  
  DFS
  3的倍数的这个数，他的所有位上的数字相加之和必须是3的倍数才可以
  我们知道，要想使数字尽可能大，那就把大的数字尽可能放前面
  给定的数组中的数字不可以重复使用
*/
var largestMultipleOfThree = function (digits) {
  digits.sort((a, b) => b - a);

  function dfs(curr, store) {
    let digitSum = curr.reduce((p, c) => {
      return p + c;
    }, 0);

    if (digitSum % 3 === 0) {
      let digitStr = curr.join('');
      if (compare(digitStr, ans)) {
        ans = digitStr;
      }
    }

    if (store.length === 0) return;

    for (let i = 0; i < store.length; i++) {
      if (curr.length === 0 && store[i] === 0) {
        if (ans === '') ans = '0';
        continue; // 去掉前导0
      }
      curr.push(store[i]);
      dfs(curr, store.slice(0, i).concat(store.slice(i + 1)));
      curr.pop();
    }
  }

  // 比较字符串形式的大小 如果 a > b 返回 true，否则返回 false
  function compare(a, b) {
    let res = null, m = a.length, n = b.length; i = 0, j = 0;

    if (m !== n) return m > n;

    while (res === null && i < m - 1) {
      if (a.charAt(i) !== b.charAt(j)) {
        res = a.charAt(i) > b.charAt(j);
      } else {
        i++; j++;
      }
    }

    return res;
  }

  let ans = '';
  dfs([], digits);

  return ans;
};