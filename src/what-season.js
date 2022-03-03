const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) return "Unable to determine the time of year!";
  if (
    typeof date === "string" ||
    typeof date === Object ||
    Array.isArray(date) ||
    typeof date === "function" ||
    date === new Date() ||
    !date.getMilliseconds ||
    !date.toString()
  )
    throw Error("Invalid date!");

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  let seasons = {
    winter: new Date(year, 2, 20),
    spring: new Date(year, 5, 19),
    summer: new Date(year, 8, 20),
    autumn: new Date(year, 11, 22),
  };
  const newDate = new Date(year, month, day);

  for (let key in seasons) {
    if (newDate < seasons[key]) return key;
  }
  return Object.keys(seasons)[0];
}

module.exports = {
  getSeason,
};
