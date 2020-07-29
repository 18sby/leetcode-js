/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let map = {},
    startLen = startTime.length,
    endLen = endTime.length,
    count = 0;

  for (let i = 0; i < startLen; i++) {
    let st = startTime[i],
      end = endTime[i];

    if (map[st] === undefined) map[st] = [];
    map[st].push(end);
  }

  let keys = Object.keys(map);

  for (let i = 0; i < keys.length; i++) {
    let key = Number(keys[i]);
    if (key > queryTime) continue;

    let ends = map[key];
    for (let value of ends) {
      if (value >= queryTime) count++;
    }
  }

  return count;
};