/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let s = '', findHead = false, findFirstNum = false, headIsSign = false;

  const isNum = (material) => '1234567890'.indexOf(material) !== -1;
  const isSign = (material) => '+-'.indexOf(material) !== -1;

  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);

    if (c === '' && s !== '') break;
    if (findHead && !isNum(c)) break;

    if (c === ' ' && s === '') continue;
    if (!findHead && (!isNum(c) && !isSign(c))) break;

    if (isNum(c)) {
      s += c;
      findHead = true;
      continue;
    }

    if (isSign(c) && headIsSign) break;
    if (isSign(c) && !findHead) {
      s += c;
      findHead = true;
      headIsSign = true;
    }

    if (isNum(c)) {
      if (!findFirstNum && c == 0) continue;
      s += c;
      findFirstNum = true;
    }
  }

  s = Number(s);

  if (s <= -2147483648) s = -2147483648;
  if (s >= 2147483648) s = 2147483647;
  if (Number.isNaN(s)) s = 0;

  return s;
};