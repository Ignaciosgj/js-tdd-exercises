const getWordLengths = (array) => {
    if (!Array.isArray(array)) throw new Error("error")
    return (array.map(item => item.length))
}

module.exports = {
    getWordLengths
};
