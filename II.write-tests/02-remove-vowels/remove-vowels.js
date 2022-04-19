function removeVowels(word) {
  const characters = word.split("");
  var result = [];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  characters.forEach(character => {
    if (!vowels.includes(character)) {
      result.push(character)
    } else {
      result.push("-")
    }
    // if (!vowels.includes(character)) result.push(character)
    // else result.push("-")
    
  });

  return result.join("");
}

module.exports = {
  removeVowels
}
