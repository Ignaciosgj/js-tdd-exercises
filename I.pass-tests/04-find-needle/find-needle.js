const findTheWord = (array, word) => {
    if (!Array.isArray(array)) throw new Error("error");
    return array.indexOf(word)
}
module.exports = {
    findTheWord
};
