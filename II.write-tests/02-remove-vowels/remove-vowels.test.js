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

  it("for the word 'aeiouAEIOU' it will return '----------'", () => {
    //arrange
    const word = 'aeiouAEIOU';
    const expected = '----------';

    //act 
    const result = removeVowels(word);

    //assert
    expect(result).toEqual(expected);
  });

  it("if function removeVowels doesn't recive a string it will throw an error", () => {
    //arrange
    const invalidInput1 = 1;
    const invalidInput2 = undefined;
    const invalidInput3 = true;
    const invalidInput4 = {name: 'nombre'};
    const invalidInput5 = ['', '', '']
    
    //act & assert
    expect(() => removeVowels(invalidInput1)).toThrow("error");
    expect(() => removeVowels(invalidInput2)).toThrow("error");
    expect(() => removeVowels(invalidInput3)).toThrow("error");
    expect(() => removeVowels(invalidInput4)).toThrow("error");
    expect(() => removeVowels(invalidInput5)).toThrow("error");
  });

  it("if function removeVowels doesn't recive any params it will throw an error", () => {
    expect(() => removeVowels()).toThrow("error");
  })
});
