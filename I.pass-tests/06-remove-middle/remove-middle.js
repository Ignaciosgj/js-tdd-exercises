const removeMiddle = (array) => {
    if (!Array.isArray(array)) throw new Error("error")
    if (array.length%2 == 0) throw new Error("error");
    return array.splice(Math.round(array.length/2 - 1), 1);
}

module.exports = {
    removeMiddle
}