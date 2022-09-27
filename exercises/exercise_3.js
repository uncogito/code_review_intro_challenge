const characters = require("../data/characters.json");

// TODO: return only characters that
// their height is between 180 and 200

const charactersWithMediumHeight = () => {
  // YOUR CODE HERE
  // YOU CAN CHANGE ANY CODE INSIDE THE FUNCTION
  const MIN_HEIGHT = 180;
  const MAX_HEIGHT = 200;
  return characters.filter((e) => (MIN_HEIGHT < e.height && e.height < MAX_HEIGHT));
};

module.exports = charactersWithMediumHeight;
