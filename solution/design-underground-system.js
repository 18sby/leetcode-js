var UndergroundSystem = function () {
  this.trip = []; // 记录行程的趟数和总时间
  this.map = {}; // 乘客进站出站的对应关系，一次完整的进站出站，要把这趟行程记录到 trip 中并从 map 中删除
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  let map = this.map;
  map[id] = {};
  map[id].start = t;
  map[id].startSta = stationName;
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let map = this.map,
    trip = this.trip;

  let { start, startSta } = map[id];
  delete map[id];
  let currCost = t - start;

  if (trip[startSta] === undefined) trip[startSta] = [];
  if (trip[startSta][stationName] !== undefined) {
    let [totalCost, nums] = trip[startSta][stationName];
    trip[startSta][stationName] = [totalCost + currCost, nums + 1];
  } else {
    trip[startSta][stationName] = [currCost, 1];
  }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  let trip = this.trip;
  let [totalCost, nums] = trip[startStation][endStation];
  return totalCost / nums;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */