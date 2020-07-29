/**
 * @param {string} s
 * @return {string[]}
 */

/*
  参考作者「遇见」，具体解释其思路
*/
var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) return [];

  let ans = [];

  function backtrack(curr, store, segments) {
    /*
      商店：当前未使用字符
      如果段数等于 3
        如果商店的长度小于等于 3
          如果商店的长度 >= 2，并且商店的第一位为 '0'「如：05」那么将其剪掉
          否则拼上'.'，在拼上商店，加入结果数组中
      
      如果段数小于 3，分别截取一位、两位、三位字符去递归，注意判断条件
        1.将商店的第一位拿出来加上 '.' 进行递归
        后面要递归截取两位和截取三位的情况，判断剪枝「如：02, 03534」
        2.将商店的前两位拿出来加上 '.' 进行递归，因为两位数不会大于 255，所以不用判断
        3.判断如果直接拿出三位，这三位是否小于 255，是就拿出三位拼上 '.' 继续递归
    */
    if (segments === 3) {
      if (store.length <= 3 && parseInt(store.slice(0, 3)) <= 255) {
        if (store.length >= 2 && store.charAt(0) === '0') {
          return;
        }
        ans.push(curr.concat(store));
        return;
      }
    }

    if (segments < 3) {
      let item = curr.concat(store.slice(0, 1)).concat('.');
      backtrack(item, store.slice(1), segments + 1);
      if (store.charAt(0) !== '0') {
        item = curr.concat(store.slice(0, 2)).concat('.');
        backtrack(item, store.slice(2), segments + 1);
        if (parseInt(store.slice(0, 3)) <= 255) {
          item = curr.concat(store.slice(0, 3)).concat('.');
          backtrack(item, store.slice(3), segments + 1);
        }
      }
    }
  };
  backtrack('', s, 0);

  return ans;
}

/*
  828ms
  思路：回溯
  合理的 ip 地址：每一段 <= 255
  对自己说声 mmp：又是细节出问题，'3' > '255' 都没注意到 ~~ ，改用数值进行比较
  
  剪枝优化：
  1.当后面字符数量超过 ip 地址剩余段的总字符数
*/
var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) return [];

  let ans = [];

  function backtrack(str, store) {
    // console.log( '每次递归', str, store );

    let strArr = str.split('.');
    // 每次进来只需要判断当前段数为 4 ，store 为空

    /*
      剪枝：剩余字符数超过了目前 ip 地址所需要的最大字符数，那么继续递归下去一定不会满足条件，将其减掉
      - 最后一位是 '.'
      - 最后一位不是 '.'，如果最后一段不足 3 ，那么将其补足为长度 3 进行比较
      2. -   ['2', '']
      23 -   ['23']
      255 -  ['255']
      255. - ['255', '']
    */
    let partLong = strArr[strArr.length - 1] === '' ? strArr.length - 1 : strArr.length;
    let lack = str[str.length - 1] !== '.' && strArr[strArr.length - 1].length < 3 ? 3 - strArr[strArr.length - 1].length : 0;

    if (store.length > ((4 - partLong) * 3 + lack)) {
      return;
    }

    // str 转换为数组之后的最后一个元素不合理 -> 终止本次递归
    // 不合理条件：
    // - 01 00 001
    // - 366 > 255
    if (strArr.length > 0 && (Number(strArr[strArr.length - 1]) > 255) || (strArr[strArr.length - 1].length > 1 && strArr[strArr.length - 1][0] === '0')) {
      return;
    }

    // str 转换为数组之后，数组长度为4，记录
    if (strArr.length === 4 && store.length === 0 && str.length === s.length + 3) {
      ans.push(strArr.join('.'));
    }

    /*
      递归
      1.需要终止递归的情况
      - 字符串的最后一段超过了 '255'
      - 字符串通过 '.' 分割成的数组的长度超过了 4
      2.继续普通回溯
      3.可以加 '.' 继续回溯的情况
      - str 不为空并且 str 的最后一位不为 '.'
    */
    for (let i = 0; i < store.length; i++) {
      if (strArr.length > 4 || Number(strArr[strArr.length - 1]) > 255) {
        break;
      }

      backtrack(str + store[i], store.slice(i + 1));

      if (str !== '' && str[str.length - 1] !== '.') {
        backtrack(str + '.', store.slice(i));
      }
    }
  }
  backtrack('', s);

  return ans;
};