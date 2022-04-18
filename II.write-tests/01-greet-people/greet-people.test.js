const { greetPeople } = require("./greet-people");

describe("Recive an array of names and return array of 'Hello name'", () => {
  it("for array [Irina, Ashleigh, Etza] it will return [Hello Irina, Hello Ashleigh, Hello Etza]", () => {
    //arrange
    const people = ['Irina', 'Ashleigh', 'Etza'];
    const expected = ['Hello Irina', 'Hello Ashleigh', 'Hello Etza'];

    //act
    const result = greetPeople(people);

    //assert
    expect(result).toEqual(expected);
  });

  it("if array isn't an array of strings it will throw an error", () => {
    //arrange
    const invalidInput1 = [1];
    const invalidInput2 = [undefined];
    const invalidInput3 = [true];
    const invalidInput4 = [{name: 'nombre'}];
    
    //act & assert
    expect(() => greetPeople(invalidInput1)).toThrow("error");
    expect(() => greetPeople(invalidInput2)).toThrow("error");
    expect(() => greetPeople(invalidInput3)).toThrow("error");
    expect(() => greetPeople(invalidInput4)).toThrow("error");
  });

  it("if function greetPeople doesn't recive an array it will throw an error", () => {
    //arrange
    const invalidInput1 = 1;
    const invalidInput2 = '';
    const invalidInput3 = undefined;
    const invalidInput4 = true;
    const invalidInput5 = {name: 'nombre'};

    //act & assert
    expect(() => greetPeople(invalidInput1)).toThrow("error");
    expect(() => greetPeople(invalidInput2)).toThrow("error");
    expect(() => greetPeople(invalidInput3)).toThrow("error");
    expect(() => greetPeople(invalidInput4)).toThrow("error");
    expect(() => greetPeople(invalidInput5)).toThrow("error");
  });
})