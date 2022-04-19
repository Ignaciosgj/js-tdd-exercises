const largerThanTen = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error("error")
  return numbers.filter(number => {
    if (isNaN(number)) throw new Error("error")
    return number > 10
  })
}
module.exports = {
  largerThanTen
}


console.log(isNaN(''));