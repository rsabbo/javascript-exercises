const leapYears = function (number) {
  //this give us the last 2 numbers of number
  const lastNumbers = number.toString().slice(-2);

  if (lastNumbers !== "00" && number % 4 == 0) {
    return true;
  } else if (lastNumbers === "00" && number % 100 == 0 && number % 400 == 0) {
    return true;
  } else {
    return false;
  }
};

leapYears(700);

// Do not edit below this line
module.exports = leapYears;
