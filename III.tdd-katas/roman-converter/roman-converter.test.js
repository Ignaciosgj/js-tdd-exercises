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

  it("given the input '19' it will return XVIIII", () => {
    //arrange
    const input = 19;
    const expected = 'XVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '20' it will return XX", () => {
    //arrange
    const input = 20;
    const expected = 'XX';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '24' it will return XXIIII", () => {
    //arrange
    const input = 24;
    const expected = 'XXIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '25' it will return XXV", () => {
    //arrange
    const input = 25;
    const expected = 'XXV';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '29' it will return XXVIIII", () => {
    //arrange
    const input = 29;
    const expected = 'XXVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '30' it will return XXX", () => {
    //arrange
    const input = 30;
    const expected = 'XXX';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '49' it will return XXXXVIIII", () => {
    //arrange
    const input = 49;
    const expected = 'XXXXVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '50' it will return L", () => {
    //arrange
    const input = 50;
    const expected = 'L';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '99' it will return LXXXXVIIII", () => {
    //arrange
    const input = 99;
    const expected = 'LXXXXVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '100' it will return C", () => {
    //arrange
    const input = 100;
    const expected = 'C';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '104' it will return CIIII", () => {
    //arrange
    const input = 104;
    const expected = 'CIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '109' it will return CVIIII", () => {
    //arrange
    const input = 109;
    const expected = 'CVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '110' it will return CX", () => {
    //arrange
    const input = 110;
    const expected = 'CX';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '149' it will return CXXXXVIIII", () => {
    //arrange
    const input = 149;
    const expected = 'CXXXXVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '150' it will return CL", () => {
    //arrange
    const input = 150;
    const expected = 'CL';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '499' it will return CCCCLXXXXVIIII", () => {
    //arrange
    const input = 499;
    const expected = 'CCCCLXXXXVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '500' it will return D", () => {
    //arrange
    const input = 500;
    const expected = 'D';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '999' it will return DCCCCLXXXXVIIII", () => {
    //arrange
    const input = 999;
    const expected = 'DCCCCLXXXXVIIII';

    //act
    const result = romanConverter(input);

    //assert
    expect(result).toBe(expected);

  });

  it("given the input '1000' it will return M", () => {
    //arrange
    const input = 1000;
    const expected = 'M';

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