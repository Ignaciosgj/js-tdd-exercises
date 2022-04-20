const { getEven } = require("./get-even-numbers");

describe("Get even numbers", () => {
    it("for array [22, 13, 73, 82, 4] it will return [22, 82, 4]", () => {
        //arrange
        const input = [22, 13, 73, 82, 4];
        const expected = [22, 82, 4];

        //act
        const result = getEven(input);

        //assert
        expect(result).toEqual(expected);
    });

    it("if function getEven doesn't recive an array of numbers it will throw an error", () => {
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
        expect(() => getEven(invalidInput1)).toThrow("error");
        expect(() => getEven(invalidInput2)).toThrow("error");
        expect(() => getEven(invalidInput3)).toThrow("error");
        expect(() => getEven(invalidInput4)).toThrow("error");
        expect(() => getEven(invalidInput5)).toThrow("error");
        expect(() => getEven(invalidInput6)).toThrow("error");
        expect(() => getEven(invalidInput7)).toThrow("error");
        expect(() => getEven(invalidInput8)).toThrow("error");
        expect(() => getEven(invalidInput9)).toThrow("error");
    });

    it("if function getEven doesn't recive any params it will throw an error", () => {
        //act & assert
        expect(() => getEven()).toThrow("error");
    });
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
