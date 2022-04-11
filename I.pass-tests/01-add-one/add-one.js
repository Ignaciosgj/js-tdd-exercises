const addOne = (array) => {
    if (!Array.isArray(array)) throw new Error("error")
    return array.map(item => item + 1)
}

module.exports = {
    addOne
}