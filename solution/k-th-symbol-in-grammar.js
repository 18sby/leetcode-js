/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

/*
  找规律
*/
var kthGrammar = function (N, K) {
  if (N == 1 || N == 2) {
    return K - 1;
  }
  let temp = kthGrammar(N - 1, Math.floor((K + 1) / 2));
  return (K + 1) % 2 == 0 ? temp : (temp + 1) % 2;
}

/*
  递归成功，但是会超过空间存储，因为位数会超过10亿
*/
var res = '0',
  curr = 0;
var kthGrammar = function (N, K) {
  if (curr === N) {
    if (K <= res.length) {
      return res[K - 1];
    }
    else {
      return undefined;
    }
  }
  curr++;

  res = nextLine(res);
  return kthGrammar(N, K);
}

var nextLine = function (str) {
  let newStr = '';
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] === 0) {
      newStr += '01';
    }
    else {
      newStr += '10';
    }
  }
  return newStr;
}