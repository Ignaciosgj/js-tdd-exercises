const { paintShop } = require("./paint-cars");

describe("Paint cars where make is Ford", () => {
    it("for the array of cars if make = Ford it will return colour Pink", () => {
        //arrange
        const cars = [
            { make: "Ford", model: "Fiesta", colour: "Red" },
            { make: "Land Rover", model: "Defender", colour: "Muddy" },
            { make: "Toyota", model: "Prius", colour: "Silver" },
            { make: "Honda", model: "Civic", colour: "Yellow" },
        ];
        const unpaintedCars = [
            { make: "Ford", model: "Fiesta", colour: "Red" },
            { make: "Land Rover", model: "Defender", colour: "Muddy" },
            { make: "Toyota", model: "Prius", colour: "Silver" },
            { make: "Honda", model: "Civic", colour: "Yellow" },
        ];
        const repaintedCars = [
            { make: "Ford", model: "Fiesta", colour: "Pink" },
            { make: "Land Rover", model: "Defender", colour: "Muddy" },
            { make: "Toyota", model: "Prius", colour: "Silver" },
            { make: "Honda", model: "Civic", colour: "Yellow" },
        ];

        //act
        const output = paintShop(cars, "Pink");

        //assert
        expect(output).toEqual(repaintedCars);
        expect(cars).toEqual(unpaintedCars);
    });

    it("if objects in array don't have make, model or colour parameters it will throw an error",() => {
        //arrange
        const cars = [
            { test: "Test" },
            { make: "Land Rover", model: "Defender", colour: "Muddy" },
            { make: "Toyota", model: "Prius", colour: "Silver" },
            { make: "Honda", model: "Civic", colour: "Yellow" },
        ];

        //act & assert
        expect(() => paintShop(cars, "Pink")).toThrow("error");
    });

    it("if function paintShop doesn't recive color parameter it will return the original array", () => {
        //arrange
        const cars = [
            { make: "Ford", model: "Fiesta", colour: "Red" },
            { make: "Land Rover", model: "Defender", colour: "Muddy" },
            { make: "Toyota", model: "Prius", colour: "Silver" },
            { make: "Honda", model: "Civic", colour: "Yellow" },
        ];
        const unpaintedCars = [
            { make: "Ford", model: "Fiesta", colour: "Red" },
            { make: "Land Rover", model: "Defender", colour: "Muddy" },
            { make: "Toyota", model: "Prius", colour: "Silver" },
            { make: "Honda", model: "Civic", colour: "Yellow" },
        ];

        //act
        const output = paintShop(cars);

        //assert
        expect(output).toEqual(unpaintedCars);
    });

    it("if function paintShop doesn't recive all parameters it will throw an error", () => {
        //act & assert
        expect(() => paintShop()).toThrow("error");
    });
});
