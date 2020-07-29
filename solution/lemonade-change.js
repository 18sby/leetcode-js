/**
 * @param {number[]} bills
 * @return {boolean}
 */

/*
  遍历一次，更新手中的钞票组合，如果不能找零给顾客，那么返回 false
  每次找零，我们尽量先找比较大的钞票给用户
  
  每次交易的过程：
    - 如果客户给的钱刚好是 5 美元，我们直接统计手中的 5 美元的数量 + 1
    
    - 如果用户给的钱超过了 5 美元，我们开始找零，每次找零的过程：
      1.先判断用户的钱是否超过 10 美元，如果是并且我们手中有 10 美元的钞票，
        那么先找 10 美元给他
      2.如果要给用户的钱不到 10 美元了，那我们就看手中有没有 5 美元的钞票，
        如果有，找给他，如果没有，返回 false
*/
var lemonadeChange = function (bills) {
  let ans = [], res = true;
  ans[5] = 0; ans[10] = 0; ans[20] = 0;

  for (let i = 0; i < bills.length; i++) {
    let collect = bills[i];
    if (collect === 5) {
      ans[5]++;
    } else {
      let give = collect - 5;
      while (give > 0) {
        if (give >= 10 && ans[10] > 0) {
          give -= 10;
          ans[10]--;
        } else if (give >= 5 && ans[5] > 0) {
          give -= 5;
          ans[5]--;
        } else {
          res = false;
          break;
        }
      }
      ans[collect]++;
    }
  }

  return res;
};