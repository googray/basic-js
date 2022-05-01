const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];

  for (let i = 0; i < names.length; i++) {
    let modified = [];
    let foo = newArr.filter((el) => {
      let regex = new RegExp(
        "^(?:" +
          names[i].replace(/[\-\[\]\/\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") +
          "(?:\\((\\d+)\\))?)$"
      );
      if (regex.test(el)) {
        if (regex.exec(el)[1] == undefined) modified[0] = true;
        else {
          modified[Number(regex.exec(el)[1])] = true;
        }
      }
      return regex.test(el);
    });
    for (var k = 0; k < modified.length; k++) {
      if (!modified[k]) break;
    }
    if (foo.length) {
      names[i] = names[i] + (k ? "(" + k + ")" : "");
    }
    newArr.push(names[i]);
  }
  return newArr;
}

module.exports = {
  renameFiles,
};
