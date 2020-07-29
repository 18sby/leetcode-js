/**
 * @param {string} path
 * @return {string}
 */

// 参考作者：骰子
// 遇到.. => pop
// 遇到非空并且不等于. 在前面拼上/ push进来
var simplifyPath = function (path) {
  var material = path.split('/'),
    result = [];
  for (let i = 0; i < material.length; i++) {
    if (material[i] === '..') {
      result.pop();
    }
    else if (material[i] !== '' && material[i] !== '.') {
      result.push('/' + material[i]);
    }
  }
  return result.length === 0 ? '/' : result.join('');
};