/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

var backspaceCompare = function (S, T) {
  let s = S.split('').reduce((prev, curr) => {
    return curr === '#' ? (prev.length > 0 ? prev.slice(0, prev.length - 1) : prev) : prev + curr;
  }, '');

  let t = T.split('').reduce((prev, curr) => {
    return curr === '#' ? (prev.length > 0 ? prev.slice(0, prev.length - 1) : prev) : prev + curr;
  }, '');

  return s === t;
}

var backspaceCompare = function (S, T) {
  let s = [], t = [];
  S = S.split('');
  T = T.split('');

  while (S.length > 0 && T.length > 0) {
    let cs = S.shift(),
      ct = T.shift();

    if (cs === '#') {
      if (s.length > 0) s.pop();
    }
    else {
      s.push(cs);
    }

    if (ct === '#') {
      if (t.length > 0) t.pop();
    }
    else {
      t.push(ct);
    }
  }

  while (S.length > 0) {
    let cs = S.shift();

    if (cs === '#') {
      if (s.length > 0) {
        s.pop();
      }
    }
    else {
      s.push(cs);
    }
  }

  while (T.length > 0) {
    let ct = T.shift();

    if (ct === '#') {
      if (t.length > 0) {
        t.pop();
      }
    }
    else {
      t.push(ct);
    }
  }

  return s.join('') === t.join('');
};