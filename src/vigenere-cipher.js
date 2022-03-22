const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%:;";

  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    let cypher = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      const inputChar = message[i];
      const inputCharIndex = this.abc.indexOf(inputChar);

      if (inputCharIndex > 25) {
        cypher += inputChar;
        continue;
      }
      if (inputChar === " ") {
        cypher += message[i];
        continue;
      }

      const keyChar = key[j];
      const keyCharIndex = this.abc.indexOf(keyChar);
      const cipherCharIndex = (inputCharIndex + keyCharIndex) % 26;
      const cypherChar = this.abc[cipherCharIndex];

      j = j === key.length - 1 ? 0 : j + 1;

      cypher += cypherChar;
    }

    if (this.type === true || this.type === undefined) return cypher;
    if (this.type === false) return cypher.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    let plain = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      const inputChar = message[i];
      const inputCharIndex = this.abc.indexOf(inputChar);

      if (inputCharIndex > 25) {
        plain += inputChar;
        continue;
      }
      if (inputChar === " ") {
        plain += message[i];
        continue;
      }

      const keyChar = key[j];
      const keyCharIndex = this.abc.indexOf(keyChar);
      const plainCharIndex = inputCharIndex - keyCharIndex;
      const plainChar =
        plainCharIndex < 0
          ? this.abc[26 + plainCharIndex]
          : this.abc[plainCharIndex];

      j = j === key.length - 1 ? 0 : j + 1;
      plain += plainChar;
    }
    if (this.type === true || this.type === undefined) return plain;
    if (this.type === false) return plain.split("").reverse().join("");
  }

  // encrypt() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }
  // decrypt() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }
}

module.exports = {
  VigenereCipheringMachine,
};
