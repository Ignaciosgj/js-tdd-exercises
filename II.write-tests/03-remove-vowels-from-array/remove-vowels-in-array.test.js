const { removeVowelsForWords } = require("./remove-vowels-in-array");

describe("remove vowels from all words in array", () => {
  it("for array [Irina, Etza, Daniel] it will return [-r-n-, -tz-, D-n--l]", () => {
    //arrange
    const words = ["Irina", "Etza", "Daniel"];
    const expected = ["-r-n-", "-tz-", "D-n--l"];

    //act
    const result = removeVowelsForWords(words);

    //assert
    expect(result).toEqual(expected);

  });

  it("if function removeVolwesForWords doesn't recive an array it will throw an error", () => {
    //arrange
    const invalidInput1 = 11;
    const invalidInput2 = '';
    const invalidInput3 = undefined;
    const invalidInput4 = true;
    const invalidInput5 = {name: 'nombre'};

    //act & assert
    expect(() => removeVowelsForWords(invalidInput1)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput2)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput3)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput4)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput5)).toThrow("error");
  });

  it("if function removeVowelsForWords doesn't recive an array of strings it will throw an error", () => {
    //arrange
    const invalidInput1 = 11;
    const invalidInput2 = [11];
    const invalidInput3 = '';
    const invalidInput4 = undefined;
    const invalidInput5 = [undefined];
    const invalidInput6 = true;
    const invalidInput7 = [true];
    const invalidInput8 = {name: 'nombre'};
    const invalidInput9 = [{name: 'nombre'}];


    //act & assert
    expect(() => removeVowelsForWords(invalidInput1)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput2)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput3)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput4)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput5)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput6)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput7)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput8)).toThrow("error");
    expect(() => removeVowelsForWords(invalidInput9)).toThrow("error");
  });

  it("if function removeVowelsForWords doesn't recive any params it will throw an error", () => {
    //act & assert
    expect(() => removeVowelsForWords()).toThrow("error");
  })
});

