const characters = require("../data/characters.json");

/* TODO: return one character with an "unknown" birth year  */

const findCharacterUnknownBirthDate = () => {
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].birth_year = "unknown") {
      return characters[i];
    }
  }
};

module.exports = findCharacterUnknownBirthDate;