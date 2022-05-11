const romanConverter = (number) => {
  // let roman = ''
  // if (number / 1000 > 0) roman = 'M'.repeat(Math.trunc(number / 1000));
  // if ((number - (Math.trunc(number / 1000) * 1000)) / 500 > 0) roman = roman + 'D'.repeat(Math.trunc((number - (Math.trunc(number / 1000)) * 1000) / 500));
  // if ((number - (Math.trunc(number / 500) * 500)) / 100 > 0) roman = roman + 'C'.repeat(Math.trunc((number - (Math.trunc(number / 500)) * 500) / 100));
  // if ((number - (Math.trunc(number / 100) * 100))/ 50 > 0) roman = roman + 'L'.repeat(Math.trunc((number - (Math.trunc(number / 100)) * 100) / 50));
  // if ((number - (Math.trunc(number / 50) * 50)) / 10 > 0) roman = roman + 'X'.repeat(Math.trunc((number - (Math.trunc(number / 50)) * 50) / 10));
  // if ((number - (Math.trunc(number / 10) * 10))/ 5 > 0) roman = roman + 'V'.repeat(Math.trunc((number - (Math.trunc(number / 10)) * 10) / 5));
  // if ((number - (Math.trunc(number / 5) * 5))/ 1 > 0) roman = roman + 'I'.repeat(Math.trunc((number - (Math.trunc(number / 5)) * 5) / 1));

  // return roman;

  let output = '', relative;
  const roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }

  for (let i in roman) {
    relative = Math.floor(number / roman[i]);
    number -= relative * roman[i];
    output += i.repeat(relative);
  }

  return output;
}

module.exports = {
  romanConverter
}


3500
500


