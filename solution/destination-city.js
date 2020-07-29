/**
 * @param {string[][]} paths
 * @return {string}
 */

var destCity = function (paths) {
  let set = new Set(), starts = {}, ends = {};

  for (let i = 0; i < paths.length; i++) {
    const [start, end] = paths[i];

    if (set.has(start)) {
      set.delete(start);
    } else {
      set.add(start);
    }

    if (set.has(end)) {
      set.delete(end);
    } else {
      set.add(end);
    }

    starts[start] = 1;
    ends[end] = 1;
  }

  set = [...set];

  for (let i = 0; i < set.length; i++) {
    if (!starts[set[i]]) {
      return set[i];
    }
  }
};