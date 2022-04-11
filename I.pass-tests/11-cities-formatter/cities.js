const formatCities = (array, transformFunc) => {
    return array.map((element) => {
        return transformFunc(element);
    });
};

module.exports = {
    formatCities,
};
