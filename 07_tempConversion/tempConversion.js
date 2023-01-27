const convertToCelsius = function (x) {
  tempCelsius = (x - 32) * (5 / 9);

  return Math.round(tempCelsius * 10) / 10;
};

const convertToFahrenheit = function (x) {
  tempFahrenheit = x * 1.8 + 32;

  return Math.round(tempFahrenheit * 10) / 10;
};

convertToCelsius(-100);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
