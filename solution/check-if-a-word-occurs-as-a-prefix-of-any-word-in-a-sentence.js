/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let senArr = sentence.split(/\s+/);
  for (let i = 0; i < senArr.length; i++) {
    let sen = senArr[i];
    if (sen.indexOf(searchWord) === 0) return i + 1;
  }
  return -1;
};