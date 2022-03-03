const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const returnTeam = () => {
    let team = [];
    members.map((person) => {
      if (
        person === Boolean ||
        person === null ||
        person === undefined ||
        typeof person === "number" ||
        typeof person === "undefined" ||
        typeof person !== "string"
      ) {
        team.push(" ");
      } else {
        team.push(person.trim().toUpperCase().slice(0, 1));
      }
      console.log("1", team);
      return team;
    });
    return team
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("")
      .trim();
  };

  if (
    members === Boolean ||
    members === null ||
    members === undefined ||
    typeof members === "number" ||
    typeof members === "undefined" ||
    !Array.isArray(members)
  ) {
    return false;
  } else {
    return returnTeam(members);
  }
}

module.exports = {
  createDreamTeam,
};
