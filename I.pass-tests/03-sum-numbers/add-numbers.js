const addAllnumbers = (array) => {
    if (!Array.isArray(array)) throw new Error("error")
    return array.reduce((totalSum, actualValue) => {
        return totalSum + actualValue;
    });
}

module.exports = {
    addAllnumbers
};