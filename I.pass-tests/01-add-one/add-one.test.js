const { addOne } = require("./add-one.js");

describe("Add 1 to each item in myArray", () => {
    it("For array [31, 57, 12, 5] it will return [32, 58, 13, 6]", () => {
        //arrange
        const myArray = [31, 57, 12, 5];
        const unchanged = [31, 57, 12, 5];
        const expected = [32, 58, 13, 6];

        //act
        const output = addOne(myArray);

        //assert
        expect(output).toEqual(expected);
        expect(myArray).toEqual(unchanged);
    });


    //given myArray is not an array it will throw an error
    it("If myArray is not an array it will throw an error", () => {
        //arrange
        const invalidInput1 = 1;
        const invalidInput2 = '';
        const invalidInput3 = undefined;
        const invalidInput4 = true;
        const invalidInput5 = {name: '', age: ''}

        //act & assert
        expect(() => addOne(invalidInput1)).toThrow("error")
        expect(() => addOne(invalidInput2)).toThrow("error")
        expect(() => addOne(invalidInput3)).toThrow("error")
        expect(() => addOne(invalidInput4)).toThrow("error")
        expect(() => addOne(invalidInput5)).toThrow("error")
    });

    it("If myArray doesn't recive parameters, it will throw an error", () => {
        //act & assert
        expect(() => addOne()).toThrow("error")
    });
});

