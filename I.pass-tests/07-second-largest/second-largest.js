const secondLargest = (array) => {
    if (!Array.isArray(array)) throw new Error("error")
    if (array.length < 2) throw new Error("error")
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[sortedArray.length - 2];
}

module.exports = {
    secondLargest
}

