/* version with for loop
const repeatString2 = function (string,repetition) { 
let output = ""

for(var i = 0; i < repetition; i++) { 
  output += string 
}
  
return output }

repeatString2("hey",3) 
*/

// simpler version with string method
const number = Math.floor(Math.random() * 1000);
const repeatString = function (string, x) {
  if (x < 0) {
    return "ERROR";
  } else {
    const result = string.repeat(x);
    return result;
  }
};

repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
