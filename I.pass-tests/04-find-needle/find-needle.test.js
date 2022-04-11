const { findTheWord } = require("./find-needle");

describe("Find the word index in array", () => {
    it("find the index of word needle in array [house, train, slide, needle, book] it will return 3", () => {
        //arrange
        const words = ["house", "train", "slide", "needle", "book"];
        const expected = 3;

        //act
        const output = findTheWord(words, "needle")

        //assert
        expect(output).toEqual(expected);
    });

    it("find the index of word plant in array [plant, shelf, arrow, bird] it will return 0", () => {
        //arrange
        const words = ["plant", "shelf", "arrow", "bird"];
        const expected = 0;

        //act
        const output = findTheWord(words, "plant");

        //assert
        expect(output).toEqual(expected);
    });

    it("if words is not an array it will throw an error", () => {
        //arrange
        const words = 1;

        //act & assert
        expect(() => findTheWord(words)).toThrow("error");
    });

    it("if function findTheWord doesn't recive parameters it will throw an error", () => {
        //act & assert
        expect(() => findTheWord()).toThrow("error");
    })
});
        