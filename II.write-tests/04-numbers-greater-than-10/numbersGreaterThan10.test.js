const { largerThanTen } = require("./numbersGreaterThan10");

describe("Get numbers larger than 10", () => {
  it("for array [4, 10, 32, 9, 21] it will return [32, 21]", () => {
    //arrange
    const numbers = [4, 10, 32, 9, 21];
    const expected = [32, 21];

    //act
    const result = largerThanTen(numbers);

    //assert
    expect(result).toEqual(expected);

  });

  it("if function largerThanTen doesn't recive an array of numbers it will throw an error", () => {
    //arrange
    const invalidInput1 = 11;
    const invalidInput2 = '';
    const invalidInput3 = undefined;
    const invalidInput4 = [undefined];
    const invalidInput5 = true;
    const invalidInput6 = {name: 'nombre'};
    const invalidInput7 = [{name: 'nombre'}];
    const invalidInput8 = [''];
    const invalidInput9 = [true];

    //act & assert
    expect(() => largerThanTen(invalidInput1)).toThrow("error");
    expect(() => largerThanTen(invalidInput2)).toThrow("error");
    expect(() => largerThanTen(invalidInput3)).toThrow("error");
    expect(() => largerThanTen(invalidInput4)).toThrow("error");
    expect(() => largerThanTen(invalidInput5)).toThrow("error");
    expect(() => largerThanTen(invalidInput6)).toThrow("error");
    expect(() => largerThanTen(invalidInput7)).toThrow("error");
  });
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
