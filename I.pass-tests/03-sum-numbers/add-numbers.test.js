const { addAllnumbers } = require("./add-numbers");

describe("Add all numbers", () => {
    it("add all the numbers in the array [9, 23, 10, 3, 8], it will return 53", () => {
        //arrange
        const numbers = [9, 23, 10, 3, 8];
        const expected = 53;

        //act
        const output = addAllnumbers(numbers);

        //assert
        expect(output).toEqual(expected);
    });

    it("if numbers is not an array it will throw an error", () => {
        //arrange
        const invalidInput1 = 1;
        const invalidInput2 = '';
        const invalidInput3 = undefined;
        const invalidInput4 = true;
        const invalidInput5 = {name: '', age: ''}

        //act & assert
        expect(() => addAllnumbers(invalidInput1)).toThrow("error");
        expect(() => addAllnumbers(invalidInput2)).toThrow("error");
        expect(() => addAllnumbers(invalidInput3)).toThrow("error");
        expect(() => addAllnumbers(invalidInput4)).toThrow("error");
        expect(() => addAllnumbers(invalidInput5)).toThrow("error");

    });

    it("if addAllNumbers doesn't recive parameters it will throw an error", () => {
        //act & assert
        expect(() => addAllnumbers()).toThrow("error");
    })
});