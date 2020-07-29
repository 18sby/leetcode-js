/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

/*
  O(n^2) 原地操作
  遍历赎金信，在杂志中找是否有对应的字符串，有就删掉，没有就返回 false
*/
var canConstruct = function(ransomNote, magazine) {
  let ans = true;
  
  for (let i = 0, len = ransomNote.length; i < len; i++) {
    let index = magazine.indexOf( ransomNote.charAt(i) );
    
    if (index === -1) {
      ans = false;
      break;
    }
    
    magazine = magazine.slice(0, index).concat( magazine.slice(index + 1) );
  }
  
  return ans;
}

/*
  96ms
  看了别人的题解，明白了本质问题
  思路：「杂志」中的每个字符串出现的次数都要大于「赎金信」对应字符串出现的次数
  使用两个对象对比就好了，因为键值是字符串，所以不需要用到 map
*/
var canConstruct = function(ransomNote, magazine) {
  let r = {}, m = {}, ans = true;
  
  for (let i = 0, len = magazine.length; i < len; i++) {
    if (m[ magazine[i] ] === undefined) {
      m[ magazine[i] ] = 1;
    } else {
      m[ magazine[i] ]++;
    }
  }
  
  for (let i = 0, len = ransomNote.length; i < len; i++) {
    if (r[ ransomNote[i] ] === undefined) {
      r[ ransomNote[i] ] = 1;
    } else {
      r[ ransomNote[i] ]++;
    }
  }
  
  let keys = Object.keys( r );
  for (let key of keys) {
    if (m[key] === undefined || m[key] < r[key]) {
      ans = false;
      break;
    }
  }
  
  return ans;
};

/*
  100ms
  思路：把「杂志」中的所有字符串出现的次数统计在一个对象中，遍历「赎金信」
  字符串，如果杂志中没有某一个字符串(该字符串被用光了)，那就返回 false，
  否则返回 true
*/
var canConstruct = function(ransomNote, magazine) {
  let material = {}, ans = true;
  
  for (let i = 0, len = magazine.length; i < len; i++) {
    if (material[ magazine[i] ] === undefined) {
      material[ magazine[i] ] = 1;
    } else {
      material[ magazine[i] ]++;
    }
  }
  
  for (let i = 0, len = ransomNote.length; i < len; i++) {
    if (material[ ransomNote[i] ] === undefined || material[ ransomNote[i] ] === 0) {
      ans = false;
      break;
    }
    
    material[ ransomNote[i] ]--;
  }
  
  return ans;
};