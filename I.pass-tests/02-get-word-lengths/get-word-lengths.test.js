const { getWordLengths } = require("./get-word-lengths");

describe("For each word in array get words length", () => {
    it("For array [sun, potato, roundabout, pizza] it will return [3, 6, 10, 5]", () => {
        //arrange
        const words = ["sun", "potato", "roundabout", "pizza"];
        const expected = [3, 6, 10, 5];

        //act
        const output = getWordLengths(words);

        //assert
        expect(output).toEqual(expected);

    });

    it("If words is not an array it will throw an error", () => {
        //arrange
        const invalidInput1 = 1;
        const invalidInput2 = '';
        const invalidInput3 = undefined;
        const invalidInput4 = true;
        const invalidInput5 = {name: '', age: ''}
        
        //act & assert
        expect(() => getWordLengths(invalidInput1)).toThrow("error");
        expect(() => getWordLengths(invalidInput2)).toThrow("error");
        expect(() => getWordLengths(invalidInput3)).toThrow("error");
        expect(() => getWordLengths(invalidInput4)).toThrow("error");
        expect(() => getWordLengths(invalidInput5)).toThrow("error");
    })

    it("If function getWordLengths doesn't recive parameters, it will throw an error", () => {
        //act & assert
        expect(() => getWordLengths()).toThrow("error");
    })
});
