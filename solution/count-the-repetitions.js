/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  if (s1.length * n1 < s2.length * n2) return 0;
  if (s1 === s2 && n2 === 1) return n1;
  const S1 = s1.repeat(n1);
  const S2 = s2.repeat(n2);
  let count = 0, i = S1.length, s2Len = S2.length - 1, j = s2Len;
  while (i--) {
    if (S2[j] === S1[i]) j--;
    if (j < 0) {
      j = s2Len;
      count++;
    }
  }
  return count;
};