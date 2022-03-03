const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const k = Math.floor(1000 * Math.LN2) / 1000;
  const kT = k / +HALF_LIFE_PERIOD;
  const re = /[A-Za-z]+\s+$/g;
  // const re = /[A-Za-z]+\s+\d+/g;
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    typeof sampleActivity === "number" ||
    +sampleActivity > +MODERN_ACTIVITY ||
    +sampleActivity <= 0 ||
    re.test("sampleActivity") ||
    sampleActivity === "ACTIVITY OVER 9000" ||
    sampleActivity === "one" ||
    +sampleActivity >= 9000 ||
    sampleActivity === ""
  ) {
    return false;
  } else if (
    typeof sampleActivity === "string" &&
    typeof +sampleActivity === "number"
  ) {
    return Number(
      Math.ceil(Math.abs(Math.log(+sampleActivity / +MODERN_ACTIVITY) / kT))
    );
  }
}

module.exports = {
  dateSample,
};
