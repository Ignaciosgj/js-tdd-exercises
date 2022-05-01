const add = (string) => {
    if (string === '') return 0;
    numbersArray = string.match(/-?\d*\d/g);
    filteredNumbersarray = numbersArray.filter(number => Number(number) <= 1000);
    if (filteredNumbersarray.length === 1  && filteredNumbersarray[0] > 0) return Number(filteredNumbersarray[0]);
    return filteredNumbersarray.reduce((totalSum, actualValue) => {
        if (actualValue < 0) throw new Error("negatives not allowed: " + filteredNumbersarray.filter(number => number < 0));
        return Number(totalSum) + Number(actualValue);
    }, 0);
}

module.exports = {
    add
}