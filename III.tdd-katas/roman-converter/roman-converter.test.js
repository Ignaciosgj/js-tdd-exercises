const { romanConverter } = require("./roman-converter");

describe("For the function romanConverter", () => {
  it("given the input '1' it will return I", () => {
    //arrange
    const input = 1;
    const expected = 'I'

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);
  });

  it("given the input '4' it will return IIII", () => {
    //arrange
    const input = 4;
    const expected = 'IIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);
  });

  it("given the input '5' it will return V", () => {
    //arrange
    const input = 5;
    const expected = 'V';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);
  });

  it("given the input '9' it will return VIIII", () => {
    //arrange
    const input = 9;
    const expected = 'VIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);
  });

  it("given the input '10' it will return X", () => {
    //arrange
    const input = 10;
    const expected = 'X';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);
  });

  it("given the input '14' it will return XIIII", () => {
    //arrange
    const input = 14;
    const expected = 'XIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '15' it will return XV", () => {
    //arrange
    const input = 15;
    const expected = 'XV';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '9999' it will return MMMMMMMMMDCCCCLXXXXVIIII", () => {
    //arrange
    const input = 9999;
    const expected = 'MMMMMMMMMDCCCCLXXXXVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });
})