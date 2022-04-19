const { removeVowels } = require("./remove-vowels")

describe("Recive a word and return the word without vowels", () => {
  it("for the word 'Samuel' it will return 'S-m--l' ", () => {
    //arrange
    const word = 'Samuel';
    const expected = 'S-m--l';

    //act
    const result = removeVowels(word);

    //assert
    expect(result).toEqual(expected);

  });

  it("for the word 'zxcvbnm' it will return 'zxcvbnm'", () => {
    //arrange
    const word = 'zxcvbnm';
    const expected = 'zxcvbnm';

    //act 
    const result = removeVowels(word);

    //assert
    expect(result).toEqual(expected);
  });

  it("for the word 'aeiou' it will return '-----'", () => {
    //arrange
    const word = 'aeiou';
    const expected = '-----';

    //act 
    const result = removeVowels(word);

    //assert
    expect(result).toEqual(expected);
  });
});
