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
const repeatString = function () {
  let string = "hey";
  return string.repeat(3);
};

repeatString();

// Do not edit below this line
module.exports = repeatString;
