/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let map = {};

  for (let i = 0, len = cpdomains.length; i < len; i++) {
    let [num, domain] = cpdomains[i].split(' ');
    num = Number(num);

    domain = domain.split('.');
    let curr = '';
    while (domain.length > 0) {
      if (curr === '') {
        curr = domain.pop() + curr;
      }
      else {
        curr = domain.pop() + '.' + curr;
      }

      if (map[curr] === undefined) {
        map[curr] = num;
      }
      else {
        map[curr] = map[curr] + num;
      }
    }
  }

  let res = [];
  for (let key in map) {
    res.push(map[key] + ' ' + key);
  }

  return res;
};