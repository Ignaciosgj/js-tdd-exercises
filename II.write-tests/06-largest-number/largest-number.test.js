const { getLargestNumber } = require("./largest-number");

describe("Get largest number", () => {
    it("for array [3, 21, 88, 4, 36] it will return 88", () => {
        //arrange
        const input = [3, 21, 88, 4, 36];
        const numbers = [3, 21, 88, 4, 36];
        const expected = 88;

        //act
        const result = getLargestNumber(input);

        //assert
        expect(result).toEqual(expected);
        expect(input).toEqual(numbers);
    });

    it("if function getLargestNumber doesn't recive an array it will throw an error", () => {
        //arrange
        const invalidInput1 = 11;
        const invalidInput2 = '';
        const invalidInput3 = undefined;
        const invalidInput4 = true;
        const invalidInput5 = {name: 'nombre'};

        //act & assert
        expect(() => getLargestNumber(invalidInput1)).toThrow("error");
        expect(() => getLargestNumber(invalidInput2)).toThrow("error");
        expect(() => getLargestNumber(invalidInput3)).toThrow("error");
        expect(() => getLargestNumber(invalidInput4)).toThrow("error");
        expect(() => getLargestNumber(invalidInput5)).toThrow("error");
    });

    it("if function getLargestNumber doesn't recive an array of numbers it will throw an error", () => {
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
        expect(() => getLargestNumber(invalidInput1)).toThrow("error");
        expect(() => getLargestNumber(invalidInput2)).toThrow("error");
        expect(() => getLargestNumber(invalidInput3)).toThrow("error");
        expect(() => getLargestNumber(invalidInput5)).toThrow("error");
        expect(() => getLargestNumber(invalidInput6)).toThrow("error");
        expect(() => getLargestNumber(invalidInput4)).toThrow("error");
        expect(() => getLargestNumber(invalidInput7)).toThrow("error");
        expect(() => getLargestNumber(invalidInput8)).toThrow("error");
        expect(() => getLargestNumber(invalidInput9)).toThrow("error");
    });

    it("if function getLargestNumber doesn't recive any params it will throw an error", () => {
        //act & assert
        expect(() => getLargestNumber()).toThrow("error");
    });
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
