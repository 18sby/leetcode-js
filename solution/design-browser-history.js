/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.index = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.index++;
  this.history[this.index] = url;
  this.history.length = this.index + 1;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  // console.log( '即将后退: ', this.history, this.index, steps );
  let history = this.history,
    len = history.length;
  if (this.index - steps >= 0) {
    this.index -= steps;
  } else {
    this.index = 0;
  }
  // console.log( '后退完成: ', this.history, this.index, steps, history[this.index] );
  return history[this.index];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let history = this.history,
    len = history.length;
  if (this.index + steps < len - 1) {
    this.index += steps;
  } else {
    this.index = history.length - 1;
  }
  return history[this.index];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */