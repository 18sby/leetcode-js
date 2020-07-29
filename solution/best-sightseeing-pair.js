/**
 * @param {number[]} A
 * @return {number}
 */

/*
  对于每一个 j 来说，A[j] - j 是固定的，所以可以转换为求，对每一个 j 来说，
  i < j 时的最大的 A[i] + i ，在加上 A[j] - j
*/
var maxScoreSightseeingPair = function (A) {
  let len = A.length,
    score = 0,
    prefix = A[0] + 0;

  for (let i = 1; i < len; i++) {
    score = Math.max(score, prefix + A[i] - i);
    prefix = Math.max(prefix, A[i] + i);
  }

  return score;
};