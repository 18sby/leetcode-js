/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  for (let i = 0, len = bits.length; i < len; i++) {
    if (i === len - 1 && bits[i] === 0) {
      return true;
    }
    if (bits[i] === 1) {
      i++;
    }
  }

  return false;
};