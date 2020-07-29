/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let next = target.charCodeAt() === 122 ? 97 : target.charCodeAt() + 1;
  next = String.fromCharCode(next);
  let index = null;

  while (true) {
    index = letters.indexOf(next);

    if (index > -1) {
      break;
    }

    next = next.charCodeAt() === 122 ? 97 : next.charCodeAt() + 1;
    next = String.fromCharCode(next);
  }

  return letters[index]
};