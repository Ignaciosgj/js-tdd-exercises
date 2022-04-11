const factorial = (number) => {
    if (isNaN(number)) throw new Error("error")
    result = 1;
    for (let i = 1 ; i <= number ; i++) {
        result = result * i
    }
    return result;
}

module.exports = {
    factorial
};
