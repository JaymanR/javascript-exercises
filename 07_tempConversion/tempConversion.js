const convertToCelsius = function(number) {
  return Math.round((10*((number-32)*(5/9))))/10;
};

const convertToFahrenheit = function(number) {
  return Math.round((10*((number*(9/5))+32)))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


