const { average } = require("./get-average");

describe("Average of numbers in array", () => {
    it("calculate average of only numbers in array [4, -, 8, 11, hello, 57, 0, 2] it will return 5", () => {
        //arrange
        const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
        const expected = 5;

        //act
        const output = average(numbers);

        //assert
        expect(output).toEqual(expected);
    });

    it("if numbers is not an array it will throw an error", () => {
        //arrange
        const numbers = 1;

        //act & assert
        expect(() => average(numbers)).toThrow("error");
    });

    it("if function average doesn't revice any params it will throw an error", () => {
        //act & assert
        expect(() => average()).toThrow("error");
    });
});
