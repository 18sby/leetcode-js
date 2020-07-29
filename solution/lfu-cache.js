/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {}; // key -> value
  this.cacheTime = []; // 每个元素存储：key，value，frequency，timeStamp
  this.customTime = 1;
};

LFUCache.prototype.isFull = function () {
  this.customTime += 2;
  return Object.keys(this.cache).length === this.capacity;
}

LFUCache.prototype.deleteMinFreq = function () {
  this.customTime += 2;
  let cache = this.cache,
    cacheTime = this.cacheTime;

  cacheTime.sort((a, b) => {
    if (a.frequency === b.frequency) {
      return a.timeStamp - b.timeStamp;
    } else {
      return a.frequency - b.frequency;
    }
  });

  let minCache = cacheTime.shift();
  delete cache[minCache.key];
}

LFUCache.prototype.updateFrequency = function (key) {
  this.customTime += 2;
  let cacheTime = this.cacheTime;
  for (let i = 0; i < cacheTime.length; i++) {
    if (cacheTime[i].key === key) {
      cacheTime[i].frequency += 1;
      cacheTime[i].timeStamp = this.customTime;
      break;
    }
  }
}

LFUCache.prototype.updateExistKey = function (key, value) {
  this.customTime += 2;
  let cache = this.cache,
    cacheTime = this.cacheTime;

  cache[key] = value;
  for (let i = 0; i < cacheTime.length; i++) {
    if (cacheTime[i].key === key) {
      cacheTime[i].value = value;
      cacheTime[i].frequency += 1;
      cacheTime[i].timeStamp = this.customTime;
      break;
    }
  }
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  this.customTime += 2;
  let target = this.cache[key];
  if (target === undefined) return -1;

  this.updateFrequency(key);
  return target;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  this.customTime += 2;
  if (this.capacity === 0) return;

  if (this.cache[key] !== undefined) {
    this.updateExistKey(key, value);
    return;
  }

  if (this.isFull()) this.deleteMinFreq();

  let cache = this.cache,
    cacheTime = this.cacheTime;

  cache[key] = value;
  cacheTime.push({
    key: key,
    value: value,
    frequency: 1,
    timeStamp: this.customTime
  });
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */