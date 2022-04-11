const paintShop = (array, string) => {
    if (!array) throw new Error("error")
    return array.map(item => {
        if (!item.colour || !item.make || !item.model) throw new Error("error")
        if (item.make === "Ford") return {make: item.make, model: item.model, colour: (string ? string : item.colour)}
        return {make: item.make, model: item.model, colour: item.colour}
    });
}

module.exports = {
    paintShop 
}