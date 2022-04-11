const { factorial } = require("./factorial");

describe("Calculate factorial", () => {
    it("calculate factorial of 5, 9, 1, 0, 3, it will return 120, 362880, 1, 1, 6", () => {
		//arrange 
        const in1 = 5;
        const exp1 = 120;

        const in2 = 9;
        const exp2 = 362880;

        const in3 = 1;
        const exp3 = 1;

        const in4 = 0;
        const exp4 = 1;

        const in5 = 3;
        const exp5 = 6;

		//act
        const out1 = factorial(in1);
        const out2 = factorial(in2);
        const out3 = factorial(in3);
        const out4 = factorial(in4);
        const out5 = factorial(in5);

		//assert
        expect(out1).toEqual(exp1);
        expect(out2).toEqual(exp2);
        expect(out3).toEqual(exp3);
        expect(out4).toEqual(exp4);
        expect(out5).toEqual(exp5);
    });

	it("if parameter is not a number it will throw an error", () => {
		//arrange
		const in1 = "a";

		//act & assert
		expect(() => factorial(in1)).toThrow("error");
	});

	it("if function factorial doesn't recive parameters it will throw an error", () => {
		//act & assert
		expect(() => factorial()).toThrow("error");
	});
});
