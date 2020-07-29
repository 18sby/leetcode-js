/**
 * @param {string[]} equations
 * @return {boolean}
 */

/*
  80ms 38.6MB
  time over 72%
  storage over 100%
  并查集
  1. 构建一遍关系
  2. 在遍历一次 equations 如果发现两个字母的关系是不等，但是在并查集中，他们是相连的，
    那么返回 false
*/
var equationsPossible = function (equations) {
  class UnionFind {
    constructor(count) {
      this.roots = new Array(count);
      this.ranks = new Array(count);
      for (let i = 0; i <= count; i++) {
        this.roots[i] = -1; // 初始化每个节点的根节点都是 -1
        this.ranks[i] = 0; // 每个节点的高度都是 0
      }
    }
    findRoot(x) {
      let x_root = x;
      while (this.roots[x_root] !== -1) {
        x_root = this.roots[x_root];
      }
      return x_root;
    }
    union(x, y) {
      let x_root = this.findRoot(x);
      let y_root = this.findRoot(y);
      if (x_root === y_root) return;
      if (this.ranks[x_root] >= this.ranks[y_root]) {
        this.roots[x_root] = y_root;
        this.ranks[y_root]++;
      } else {
        this.roots[y_root] = x_root;
        this.ranks[x_root]++;
      }
    }
  }

  let len = equations.length,
    unionFind = new UnionFind(26);
  for (let i = 0; i < len; i++) {
    let curr = equations[i];
    if (curr.charAt(1) !== '!') {
      let [x_code, y_code] = [
        curr.charAt(0).charCodeAt() - 97,
        curr.charAt(3).charCodeAt() - 97,
      ];
      unionFind.union(x_code, y_code);
    }
  }

  for (let i = 0; i < len; i++) {
    let curr = equations[i];
    if (curr.charAt(1) === '!') {
      let [x_code, y_code] = [
        curr.charAt(0).charCodeAt() - 97,
        curr.charAt(3).charCodeAt() - 97,
      ];
      if (unionFind.findRoot(x_code) === unionFind.findRoot(y_code)) {
        return false;
      }
    }
  }

  return true;
}

/*
  根据每一个 equation[i] 来创造关系
  
  举例：["a==b","b!=c","c==a"]
  
  第一个 equation 
*/
var equationsPossible = function (equations) {
  let ret = {}, // relation 关系
    EQUAL = '==',
    UNEQUAL = '!=';

  for (let i = 0, j = equations.length; i < j; i++) {
    let equation = equations[i];
    const [x, sign, y] = [
      equation.slice(0, 1),
      equation.slice(1, 3),
      equation.slice(3)
    ];
    // console.log( x, sign, y );

    if (ret[x] === undefined) ret[x] = { equal: [], unequal: [] }
    if (ret[y] === undefined) ret[y] = { equal: [], unequal: [] }
    if (sign === EQUAL) {
      // 将 x 和 y 互相填入它们的 equal 中，如果 equal 和 unequal 出现
      // 冲突，说明条件是满足不了的，返回 false，同样判断 x、y 的 equal
      // 和 unequal
      let equal = ret[x].equal,
        unequal = ret[x].unequal;
      equal.push(y);
      if (unequal.includes(y)) return false;
      for (let i = 0; i < equal.length; i++) {
        let c = equal[i];
        ret[c].equal.push(y);
        if (ret[c].unequal.includes(y)) return false;
      }

      equal = ret[y].equal;
      unequal = ret[y].unequal;
      equal.push(x);
      if (unequal.includes(x)) return false;
      for (let i = 0; i < equal.length; i++) {
        let c = equal[i];
        ret[c].equal.push(x);
        if (ret[c].unequal.includes(x)) return false;
      }
    } else {
      unequal = ret[x].equal;
      equal = ret[x].unequal;
      unequal.push(y);
      if (equal.includes(y)) return false;
      for (let i = 0; i < unequal.length; i++) {
        let c = unequal[i];
        ret[c].unequal.push(y);
        if (ret[c].equal.includes(y)) return false;
      }

      unequal = ret[y].equal;
      equal = ret[y].unequal;
      unequal.push(x);
      if (equal.includes(x)) return false;
      for (let i = 0; i < unequal.length; i++) {
        let c = unequal[i];
        ret[c].unequal.push(x);
        if (ret[c].equal.includes(x)) return false;
      }
    }
  }

  return true;
};