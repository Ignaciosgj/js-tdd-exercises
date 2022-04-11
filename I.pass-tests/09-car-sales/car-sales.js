const sales = (array) => {
    const brands = array.map(item => {
        if (!item.make || !item.price) throw new Error("error")
        return item.make
    });
    const orderedBrands = [...new Set(brands)].sort();
    const brandPrice = orderedBrands.map(brand => {
        return {
            brand: brand,
            total: array.filter(car => car.make === brand).reduce((total, car) => total + car.price, 0)
        }
    });
    const result = brandPrice.reduce((brand, brandData) => {
        brand[brandData.brand] = brandData.total;
        return brand;
    },{});
    return result;
}

module.exports = {
    sales
}