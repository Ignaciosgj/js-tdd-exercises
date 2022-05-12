const romanConverter = (number) => {
  
    let output = '', relative;
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
  
    for (let i of Object.keys(roman)) {
      relative = Math.floor(number / roman[i]);
      number -= relative * roman[i];
      output += i.repeat(relative);
    }
  
    return output;
  }
  
  module.exports = {
    romanConverter
  }