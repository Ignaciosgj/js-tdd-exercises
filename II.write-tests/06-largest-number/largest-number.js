const getLargestNumber = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error("error");
  numbers.map(number => {
    if(typeof(number) !== 'number') throw new Error("error");
  })
  const newArray = [...numbers];
  const orderedArray = newArray.sort((x,y) => x - y);
  return orderedArray[orderedArray.length - 1];
}

module.exports = {
  getLargestNumber
}