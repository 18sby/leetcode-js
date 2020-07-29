/**
 * @param {string} digits
 * @return {string[]}
 */

// 这道题自己的思路还能看，就是内存消耗太大了
// 思路:
//  2.根据 每个字符串(也就是点击的数字) 对应的字母，将他们存成数组 a
//  3.写一个私有方法，传入两个数组，返回这两个数组所有可能组合的形式 存到一个数组里
//  4.遍历数组 a ，去执行私有方法
//  5.本题目没有要求排序，可以选择通过 ascall 码 对每个字符串进行排序
var letterCombinations = function (digits) {
  function concatArr(a, b) {
    let arr = [];
    for (let i = 0, len = a.length; i < len; i++) {
      for (let j of b) {
        arr.push(a[i] + j);
      }
    }
    return arr;
  }

  if (!digits) { return [] }

  let digitsArr = digits.split('');
  let strArr = digitsArr.map(num => {
    switch (num) {
      case '2':
        return 'abc';
      case '3':
        return 'def';
      case '4':
        return 'ghi';
      case '5':
        return 'jkl';
      case '6':
        return 'mno';
      case '7':
        return 'pqrs';
      case '8':
        return 'tuv';
      case '9':
        return 'wxyz';
    }
  })

  if (strArr.length === 1) {
    let finalArr = [];
    for (let p of strArr[0]) {
      finalArr.push(p);
    }
    return finalArr;
  }

  let finalArr = concatArr(strArr[0], strArr[1]);
  for (let k = 2; k < strArr.length; k++) {
    finalArr = concatArr(finalArr, strArr[k])
  }
  return finalArr;

};