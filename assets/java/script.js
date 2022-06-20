// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// standard array var specialCharacters = ["!,@,#"];

// split method usage ="1234".split(");

// better way to do this? look at Crypto.getRandomValues() later

// replace mathfloor w/ ~~

// join() to join arrays then use 

// object literal structure key : value / var *varname* = { var : *varname* = *value* : *key*} , 

// Math.random() instead of ? 

// char sets and defining variables

// user input defined by acceptance criteria
// password length (8-128 characters)?
// include lowercase?
// include uppercase?
// include numeric chars?
// and/or special characters?

// START DEFAULT CODE

// Get references to the #generate element DEFAULT
var generateBtn = document.querySelector("#generate");

// Write password to the #password input DEFAULT
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button DEFAULT
generateBtn.addEventListener("click", writePassword);

//END DEFAULT CODE

  var numbersArray = "123456789".split("");

  var lowLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");

  var capLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  var specialCharactersArray = "!@#$%^&*()".split("");

  var passLengthUser = 0;

  var result = "";

function generatePassword() {
  //Z objects for user input

  let numbersUser = "";
  let lowLettersUser = "";
  let capLettersUser = "";
  let specialCharactersUser = "";

  passLengthUser = 0;
  result = "";

  passLengthUser = window.prompt("Password length from 8 to 128 characters");

  if (passLengthUser < 8) {
    window.alert("Please choose from 8 to 128 characters.");
    return;
  }

  if (passLengthUser > 128) {
    window.alert("Please choose from 8 to 128 characters.");
    return;
  }

  // logging boolean returns to confirm true or false

  numbersUser = confirm("User numbers?");
  console.log(numbersUser);

  lowLettersUser = confirm("Use lower case characters?");
  console.log(lowLettersUser);

  capLettersUser = confirm("Use upper case characters?");
  console.log(capLettersUser);

  specialCharactersUser = confirm("Use special characters?");
  console.log(specialCharactersUser);  

  // start logical operators madness

  if (numbersUser === false && lowLettersUser === false && capLettersUser === false && specialCharactersUser === false) {
    alert("You must select a password length of between 8 and 128 characters in addition to one of the following options to generate a password: numbers, lower case letters, upper case letters, or special characters.");
    return;
  }

  do {
  (numbersUser === true && passLengthUser < result);
    var nU = numbersArray[~~(Math.random)*numbersArray.length];
    result = result + nU;
    passLengthUser++;
    console.log(result);
    
  (lowLettersUser === true && passLengthUser < result) 
    var lL = lowLettersArray[~~(Math.random)*lowLettersArray.length];
    result = result + lL;
    passLengthUser++;
    console.log(result);  

   (capLettersUser === true && passLengthUser < result) 
    var cL = capLettersArray [~~(Math.floor)*capLettersArray.length];
    result = result + cL;
    passLengthUser++;
    console.log(result);  

   (specialCharactersUser === true && passLengthUser < result) 
    var sC = specialCharactersArray[~~(Math.random)*specialCharactersArray.length];
    result = result + sC;
    passLengthUser++;
    console.log(result);
  }

while (passLengthUser < result)

return result;
}




   
  //not going to concat if using math random

  /*if (lowLettersUser === true) {
    result = result.concat(passwordArray.numbersArray);
  }

  if (capLettersUser === true) {
    result = result.concat(passwordArray.capLettersArray);
  }

  if (specialCharactersUser === true) {
    result = result.concat(passwordArray.specialCharactersArray);
  }*/





