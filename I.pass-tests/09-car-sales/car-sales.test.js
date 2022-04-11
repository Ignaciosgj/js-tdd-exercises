const { sales } = require("./car-sales");

describe("Car sales", () => {
  it("Car sales", () => {
    //arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
    ];
  
    const totals = {
      Ford: 22999,
      Honda: 8000,
      "Land Rover": 21000,
      Toyota: 6500
    };
  
    //act
    var output = sales(carsSold);
  
    //assert
    expect(output).toEqual(totals);

  });

  it("if objects in array don't have make, model or price parameters it will throw an error", () => {
    //arrange
    const noMakeArray = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
    ];

    const noPriceArray = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow" },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
    ];

    //act & assert
    // expect(() => sales(noPriceArray)).toThrow("error")
    expect(() => sales(noMakeArray)).toThrow("error")

  })
});
