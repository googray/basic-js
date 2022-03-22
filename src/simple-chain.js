const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",

  getLength() {
    let length = this.chain.split("~~").length;
    return length;
  },

  addLink(value) {
    // value === "" || value === undefined
    let arr = this.chain.split("~~");
    if (arr[0] === "") arr.shift();
    value === undefined || value === ""
      ? arr.push("(   )")
      : arr.push("( " + `${value}` + " )");

    this.chain = arr.join("~~");
    return this;
  },
  removeLink(position) {
    let arr = this.chain.split("~~");
    if (
      position === undefined ||
      position === NaN ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > arr.length
    ) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }

    arr.splice(position - 1, 1);
    this.chain = arr.join("~~");
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    let str = "";
    str += this.chain;
    this.chain = "";
    return str;
  },
};

module.exports = {
  chainMaker,
};
