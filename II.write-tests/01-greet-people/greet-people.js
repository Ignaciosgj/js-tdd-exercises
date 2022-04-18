function greetPeople(people) {
  if (!Array.isArray(people)) throw new Error("error")
  var greeting = "Hello ";
  return people.map(person => {
    if(typeof(person) !== 'string' ) throw new Error("error")
    return greeting + person
  })
}

module.exports = {
  greetPeople
}