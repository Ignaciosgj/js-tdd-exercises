const average = (array) => {
    if (!Array.isArray(array)) throw new Error("error")
    const filteredArray = array.filter(item => Number.isInteger(item))
    const sum = filteredArray.reduce((totalSum, actualValue) => {return totalSum + actualValue})
    return (sum/filteredArray.length);
}

module.exports = { 
    average
}