/*
  使用 map 和 array 两个数据结构完成，不使用 Set 了，不然做这道题没有意义
  
  ps：开始没想清楚怎么做到删除的时候，能保证其他值在 map 中的索引映射不被影响，
  看了官方的思路(我脑子咋就不转弯)，直接把要删除的元素和数组的最后一个元素在 map 中
  的映射关系互换一下，把要删除的元素和数组的最后一个元素互换位置，删除之。
*/
var RandomizedSet = function () {
  this.arr = [];
  this.map = {};
};

RandomizedSet.prototype.insert = function (val) {
  let map = this.map,
    arr = this.arr;

  // 把数组中的值和索引的映射关系在 map 中存一下，为了后面删除元素的时候达到 O(1) 的时间复杂度
  if (map[val] === undefined) {
    map[val] = arr.length; // 新插入元素的索引
    arr.push(val);
    return true;
  } else {
    return false;
  }
};

// 删除元素之前，把「要删除的元素」和「数组的最后一个元素」在 map 中的索引映射关系，
// 以及在数组中的位置互换一下，然后删除最后一个元素即可。(可以保证其他元素的
// 『值 - 索引』的映射关系不乱)
RandomizedSet.prototype.remove = function (val) {
  let map = this.map,
    arr = this.arr;

  if (map[val] === undefined) {
    return false;
  } else {
    let index = map[val],
      lastVal = arr[arr.length - 1],
      lastIndex = arr.length - 1;

    if (index !== lastIndex) {
      [arr[index], arr[lastIndex]] = [arr[lastIndex], arr[index]];
      let del = arr.pop();
      delete map[val];
      map[lastVal] = index;
    } else {
      arr.pop();
      delete map[val];
    }

    return true;
  }
};

RandomizedSet.prototype.getRandomIndex = function (lastIndex) {
  return Math.floor(Math.random() * (lastIndex + 1));
}

RandomizedSet.prototype.getRandom = function () {
  let arr = this.arr,
    n = arr.length;

  let randomIndex = this.getRandomIndex(n - 1);
  return arr[randomIndex];
};