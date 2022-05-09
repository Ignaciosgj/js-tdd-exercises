const fizzbuzz = (number) => {
  const array = []
  for (let i = 1; i < number + 1; i++) {
    if (i % 15 === 0) array.push("FizzBuzz");
    else if (i % 5 === 0 || i.toString().match("5")) array.push("Buzz");
    else if (i % 3 === 0 || i.toString().match("3")) array.push("Fizz");
    else array.push(i);
  }
  const result = array.join(',')
  return result;
}

module.exports = {
  fizzbuzz
}