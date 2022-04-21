const getEven = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error("error");
  numbers.map(number => {
    if(typeof(number) !== 'number') throw new Error("error");
  });
  return numbers.filter(number => number % 2 === 0);
}

module.exports = {
  getEven
}
