/* first attempt that worked

const sumAll = function(...arr) {
  
  let newArray = [];
  let sum = 0;
  
arr.sort(function(a, b) {
        return a - b
    });
  
  
  if(typeof arr[0] === "number" && arr[0] >= 0 && typeof arr[1] === "number" && arr[1] >= 0) {
    for (let i = arr[0]; i <= arr[1]; i++) {
        newArray.push(i)
    }
  
  for (let i = 0; i < 
  newArray.length; i += 1) {
  sum += newArray[i]
  }
  
       return sum
    
  } else {
    return "ERROR"
  }



};

sumAll(10, [90, 1])*/

//second attempt: cleaner code

const sumAll = function (...arr) {
  let sum = 0;

  //telling the .sort() function to sort the numbers in ascending order
  arr.sort(function (a, b) {
    return a - b;
  });

  //check all elementts inside my arr array: if they are numbers and not negative
  //use arr.slice(-1) to refer to the last item in the array, in case it gets 2, 3, 4 arguments it always works
  if (arr.every((element) => typeof element === "number" && element >= 0)) {
    for (let i = arr[0]; i <= arr.slice(-1); i++) {
      sum += i;
    }

    return sum;
  } else {
    return "ERROR";
  }
};

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
