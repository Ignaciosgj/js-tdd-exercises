const { getSecondThird } = require("./get-second-third");

describe("Get the second and third smallest number", () => {
    it("for array [90, 5, 11, 8, 6] it will return [6, 8]", () => {
        //arrange
        const input = [90, 5, 11, 8, 6];
        const numbers = [90, 5, 11, 8, 6];
        const expected = [6, 8];

        //act
        const result = getSecondThird(input);

        //assert
        expect(result).toEqual(expected);
        expect(numbers).toEqual(input);
    });

    it("if function getSecondThird doesn't recive an array it will throw an error", () => {
        //arrange
        const invalidInput1 = 11;
        const invalidInput2 = '';
        const invalidInput3 = undefined;
        const invalidInput4 = true;
        const invalidInput5 = {name: 'nombre'};

        //act & assert
        expect(() => getSecondThird(invalidInput1)).toThrow("error");
        expect(() => getSecondThird(invalidInput2)).toThrow("error");
        expect(() => getSecondThird(invalidInput3)).toThrow("error");
        expect(() => getSecondThird(invalidInput4)).toThrow("error");
        expect(() => getSecondThird(invalidInput5)).toThrow("error");
    });

    it("if function getSecondThird doesn't recive an array of numbers it will throw an error", () => {
        //arrange
        const invalidInput1 = 11;
        const invalidInput2 = '';
        const invalidInput3 = [''];
        const invalidInput4 = undefined;
        const invalidInput5 = [undefined];
        const invalidInput6 = true;
        const invalidInput7 = [true];
        const invalidInput8 = {name: 'nombre'};
        const invalidInput9 = [{name: 'nombre'}];

        //act & assert 
        expect(() => getSecondThird(invalidInput1)).toThrow("error");
        expect(() => getSecondThird(invalidInput2)).toThrow("error");
        expect(() => getSecondThird(invalidInput3)).toThrow("error");
        expect(() => getSecondThird(invalidInput4)).toThrow("error");
        expect(() => getSecondThird(invalidInput5)).toThrow("error");
        expect(() => getSecondThird(invalidInput6)).toThrow("error");
        expect(() => getSecondThird(invalidInput7)).toThrow("error");
        expect(() => getSecondThird(invalidInput8)).toThrow("error");
        expect(() => getSecondThird(invalidInput9)).toThrow("error");
    });

    it("if function getSecondThird doesn't recive any params it will throw an error", () => {
        //act & assert
        expect(() =>getSecondThird()).toThrow("error");
    })
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
