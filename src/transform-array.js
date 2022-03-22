const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!arr || !Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");

  [...arr].map((el, ind) => {
    if (el === "--double-next" && arr[ind + 1]) {
      arr.splice(ind, 1, arr[ind + 1]);
    } else if (
      (el === "--double-next" && !arr[ind + 1]) ||
      (el === "--double-next" && arr[ind + 1] === " ")
    ) {
      arr.splice(ind);
    }
    if (el === "--double-prev" && arr[ind - 1]) {
      arr.splice(ind, 1, arr[ind - 1]);
    } else if (
      (el === "--double-prev" && !arr[ind - 1]) ||
      (el === "--double-prev" && arr[ind - 1] === " ")
    ) {
      arr.splice(ind, 1);
    }
    if (el === "--discard-next") {
      arr.splice(ind, 1, " ");
      arr.splice(ind + 1, 1, " ");
    }
    if (el === "--discard-prev") {
      if (ind === 0) {
        arr.splice(ind, 1, " ");
      } else {
        arr.splice(ind - 1, 2, " ");
      }
    }
    return;
  });
  return arr.filter((el) => el !== " ");
}

module.exports = {
  transform,
};
