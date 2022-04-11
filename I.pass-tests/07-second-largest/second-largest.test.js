const { secondLargest } = require("./second-largest");

describe("Get second largest number in array", () => {
    it("get second largest number in array [2, 0, 23, 0, 57, 1, 230] it will return 57", () => {
        //arrange
        const numbers = [2, 0, 23, 0, 57, 1, 230];

        //act
        const output = secondLargest(numbers);

        //assert
        expect(output).toEqual(57);
    });

	it("if array length is lesser than 2 it will throw an error", () => {
		//arrange 
		const numbers = [1];

		//act & assert 
		expect(() => secondLargest(numbers)).toThrow("error");
	})

    it("if parameter is not an array it will throw an error", () => {
		//arrange
		const numbers = 1;

		//act & assert
		expect(() => secondLargest(numbers)).toThrow("error");
	});

	it("if function secondLargest doesn't recive parameters it will throw an error", () => {
		//act & assert
		expect(() => secondLargest()).toThrow("error")
	});
});
