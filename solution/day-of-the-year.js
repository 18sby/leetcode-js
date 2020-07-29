/**
 * @param {string} date
 * @return {number}
 */

/*
  思路都在代码里
*/
var dayOfYear = function (date) {
  let isLeapYear = false;
  let [year, month, day] = date.split('-');
  year = +year;
  month = +month;
  day = +day;

  isLeapYear = (year % 4 === 0 && year % 100 !== 0) ? true : false;

  function searchDays(mon) {
    switch (mon) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return isLeapYear ? 29 : 28;
    }
  }

  let i = 1, count = 0;
  while (i < month) {
    count += searchDays(i);
    i++;
  }
  count += day;

  return count;
};