/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  let textArr = text.split(' '),
    map = {};
  if (textArr.length > 0) textArr[0] = textArr[0].toLowerCase();

  for (let i = 1; i < textArr.length; i++) {
    let j = i - 1, curr = textArr[i];
    while (j >= 0 && textArr[j].length > curr.length) {
      textArr[j + 1] = textArr[j];
      j--;
    }
    textArr[j + 1] = curr;
  }

  if (textArr.length > 0) {
    let head = textArr[0];
    textArr[0] = head.slice(0, 1).toUpperCase().concat(head.slice(1));
  }

  return textArr.join(' ');
};