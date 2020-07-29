/**
 * @param {number} n
 * @return {number}
 */

/*
  根据题目要求推算出每个字母之前可以跟什么，
  
  题目要求：
  a  e
  e  a i 
  i  a e o u
  o  i u
  u  a
  
  每个字母只能放在哪个字母之后
  a  u i e => 以 a 结尾的序列只能由 u i e 结尾的序列拼接一个 a 而来
  e  a i
  i  e o
  o  i
  u  i o
*/
var countVowelPermutation = function (n) {
  if (n === 1) return 5;
  let count = 5;
  let mod = 1e9 + 7;
  let a = e = i = o = u = 1;
  for (let k = 2; k <= n; k++) {
    let next_a = (u + e + i) % mod;
    let next_e = (a + i) % mod;
    let next_i = (e + o) % mod;
    let next_o = i;
    let next_u = (o + i) % mod;
    a = next_a; e = next_e; i = next_i; o = next_o; u = next_u;
  }

  return (a + e + i + o + u) % mod;
};