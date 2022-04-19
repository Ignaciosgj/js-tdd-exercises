const { removeVowels } = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  if (!Array.isArray(words)) throw new Error("error")
  const result = words.map(word => removeVowels(word));
  return result;
}

module.exports = {
  removeVowelsForWords
}

