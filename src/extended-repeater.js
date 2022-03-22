const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let add = [];
  let part = [];
  let one = options.addition;
  let adition = one === undefined ? "" : String(options.addition);
  console.log(adition);
  console.log(adition === undefined);
  let string = String(str);
  if (adition !== "") {
    if (options.additionRepeatTimes !== undefined) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        add.push(adition);
      }
      string = string + add.join(options.additionSeparator ?? "|");
    } else {
      string = string + adition;
    }
  }
  if (options.repeatTimes) {
    for (let j = 0; j < options.repeatTimes; j++) {
      part.push(string);
    }
    string = part.join(options.separator ?? "+");
  } else {
    string = string;
  }

  return string;
}

module.exports = {
  repeater,
};
