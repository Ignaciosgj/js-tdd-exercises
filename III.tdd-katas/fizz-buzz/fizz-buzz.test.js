const { fizzbuzz } = require("./fizz-buzz");

describe("For the function fizzbuzz", () => {
  it("given the input 1 it will print 1", () => {
    //arrange
    const input = 1;
    const expected = "1";

    //act
    const result = fizzbuzz(input)

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input 2 it will print 1,2", () => {
    //arrange
    const input = 2;
    const expected = "1,2"

    //act
    const result = fizzbuzz(input);

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input 3 it will print 1,2,Fizz", () => {
    //arrange
    const input = 3;
    const expected = "1,2,Fizz";

    //act
    const result = fizzbuzz(input);

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input 5 it will print 1,2,Fizz,4,Buzz", () => {
    //arrange
    const input = 5;
    const expected = "1,2,Fizz,4,Buzz";

    //act
    const result = fizzbuzz(input);

    //assert
    expect(result).toEqual(expected);
  });

  it("given the input 15 it will print 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz", () => {
    //arrange
    const input = 23;
    const expected = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz";

    //act
    const result = fizzbuzz(input);

    //assert
    expect(result).toEqual(expected);
  })
});