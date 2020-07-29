/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*
  分治法，不但分解为子问题：
  如果字符串中出现了出现次数不足 k 的字符，那么最长子串一定不在这里面，
  把它分割出去，继续以这样的条件来判断分割出去的子串是否满足条件
*/
var longestSubstring = function(s, k) {
  let map = {}, notEnough = [], long = 0;
  
  // 用哈希表存储每个字符的出现次数
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    map[c] = map[c] === undefined ? 1 : map[c]+1;
  }
  
  // 将出现次数少于 k 的字符放到一个数组中给后面的判断用
  for (const key in map) {
    if (map[key] < k) notEnough.push( key );
  }
  
  /*
    判断当前字符串是否包含不满足条件的字符串
    如果不包含，返回 true: boolean
    如果包含，返回包含的第一个索引 1: number
  */
  function notHasNotEnoughStr(str) {
    let res = true;
    for (let i = 0; i < notEnough.length; i++) {
      let index = str.indexOf( notEnough[i] );
      if (index !== -1) {
        res = index;
        break;
      }
    }
    return res;
  }
  
  // 先判断这个串的每个字符出现的次数是否都超过 k，如果超过 k ，比较长度更新 long
  function strIsValid(str) {
    let temp = {}, isValid = true;
    for (let i = 0; i < str.length; i++) {
      let c = str.charAt(i);
      temp[c] = temp[c] === undefined ? 1 : temp[c] + 1;
    }
    
    for (const key in temp) {
      if (temp[key] < k) {
        isValid = key;
        break;
      }
    }
    
    
    if (isValid !== true) { // 截取这个字符串两头的字符串继续去 calculateStr
      let [startIndex, endIndex] = [
        str.indexOf(isValid),
        str.lastIndexOf(isValid)
      ];
      calculateStr( str.slice(0, startIndex) );
      calculateStr( str.slice(endIndex + 1) );
      if (startIndex !== endIndex) { // 截取中间部分
        calculateStr( str.slice(startIndex + 1, endIndex) );
      }
      return ;
    }
    long = long > str.length ? long : str.length;
  }
  
  // 递归求不包含出现次数少于 k 的最长子串
  function calculateStr(originStr) {
    let str = originStr;
    let res = notHasNotEnoughStr( str );
    if (res === true) {
      strIsValid(str);
    } else {
      calculateStr( str.slice(0, res) );
      calculateStr( str.slice(res + 1) );
    }
  }
  
  calculateStr( s );
  
  return long;
};