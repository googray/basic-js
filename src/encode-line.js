const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // if (str.length == 0) return "";

  // let newStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   let calc = 0;
  //   for (let j = 0; j < str.length; j++) {
  //     if (str[i] == str[j] && i > j) {
  //       break;
  //     }
  //     if (str[i] == str[j]) {
  //       calc++;
  //     }
  //   }
  //   if (calc > 0) {
  //     if (calc == 1) {
  //       newStr += `${""}${str[i]}`;
  //     } else {
  //       newStr += `${calc}${str[i]}`;
  //     }
  //   }
  // }
  // return newStr;

  let newStr = str.replace(/([a-z])\1*/g, (element) =>
    element.length > 1 ? element.length + element[0] : element[0]
  );
  return newStr;
}

module.exports = {
  encodeLine,
};
