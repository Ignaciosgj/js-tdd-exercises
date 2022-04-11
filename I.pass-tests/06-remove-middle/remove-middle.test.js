const { removeMiddle } = require("./remove-middle");

describe("Remove middle element of an array", () => {
    it("remove the middle element of array [mouse, girafee, queen, window, bottle] it will return queen", () => {
        //arrange
        const words = ["mouse", "giraffe", "queen", "window", "bottle"];
        const expectedWords = ["mouse", "giraffe", "window", "bottle"];
        const expectedOutput = ["queen"];

        //act
        const output = removeMiddle(words);

        //assert
        expect(output).toEqual(expectedOutput);
        expect(words).toEqual(expectedWords);
    });

    it("if the length of array is an even number it will throw an error", () => {
        //arrange
        const words = ["mouse", "giraffe", "queen", "window"]

        //act & assert
        expect(() => removeMiddle(words)).toThrow("error");

    });
    
    it("if parameter is not an array it will throw an error", () => {
        //arange
        const words = 1;

        //act & assert
        expect(() => removeMiddle(words)).toThrow("error");
    });

    it("if function removeMiddle doesn't recive parameters it will throw an error", () => {
        //act & assert
        expect(() => removeMiddle()).toThrow("error")
    });
});
