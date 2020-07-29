var Solution = function (nums) {
  this.order = nums;
  this.index = 0;
};

Solution.prototype.buildRandomArr = function () {
  let order = this.order;
}

Solution.prototype.reset = function () {
  return this.order;
};

Solution.prototype.shuffle = function () {
  let copy = [...this.order];

  const getRandomIndex = (start, end) => {
    return Math.floor(start + Math.random() * (end - start + 1));
  }

  let start = 0, end = copy.length;
  while (start < end) {
    let swapIndex = getRandomIndex(start, end - 1);
    [copy[start], copy[swapIndex]] = [copy[swapIndex], copy[start]];
    start++;
  }
  return copy;
};