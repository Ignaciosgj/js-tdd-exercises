const { add } = require("./calculator");

describe("For the function add", () => {
  it("given the input '' it will return 0", () => {
    //arrange
    const input = '';
    const expected = 0;

    //act
    const result = add(input);

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input '1' it will return 1", () => {
    //arrange
    const input = '1';
    const expected = 1;

    //act
    const result = add(input);

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input '1,2' it will return 3", () => {
    //arrange
    const input = '1,2'
    const expected = 3;

    //act
    const result = add(input);

    //assert
    expect(result).toEqual(expected)
  });

  it("given the input '1,2,3,4,5' it will return 15", () => {
    //arrage
    const input = '1,2,3,4,5'
    const expected = 15;

    //act
    const result = add(input);

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input '1\n2,3' it will return 6", () => {
    //arrange
    const input = '1\n2,3';
    const expected = 6;

    //act
    const result = add(input);

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input '//;\n1;2' it will return 3", () => {
    //arrange
    const input = '//;\n1;2';
    const expected = 3;

    //act
    const result = add(input);

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input '1,4,-1' it will throw an exception 'negatives not allowed: -1'", () => {
    //arrange
    const input = '1,4,-1';

    //act & assert
    expect(() => add(input)).toThrow("negatives not allowed: -1");
  });

  it("given the input '1001,2' it will return 2", () => {
    //arrange
    const input = '1001,2';
    const expected = 2;

    //act 
    const result = add(input);

    //assert
    expect(result).toEqual(expected);
  });
})