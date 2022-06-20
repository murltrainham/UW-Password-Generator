// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// standard array var specialCharacters = ["!,@,#"];

// split method usage ="1234".split(");

// better way to do this? look at Crypto.getRandomValues() later

// replace mathfloor w/ ~~

// join() to join arrays then use

// object literal structure key : value / var *varname* = { var : *varname* = *value* : *key*},

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

var concatArray = [];

var passLengthUser = 0;

var result = "";

function generatePassword() { 

  let numbersUser = "";
  let lowLettersUser = "";
  let capLettersUser = "";
  let specialCharactersUser = "";
  var concatArray = [];
  var result = "";

  passLengthUser = window.prompt("Password length from 8 to 128 characters");
  console.log(passLengthUser);

  if (passLengthUser < 8 || passLengthUser > 128) {
    window.alert("Please choose from 8 to 128 characters.");
    return;
  }

  // boolean returns to confirm true or false with confirm

  numbersUser = confirm("User numbers?");
  console.log(numbersUser);

  lowLettersUser = confirm("Use lower case characters?");
  console.log(lowLettersUser);

  capLettersUser = confirm("Use upper case characters?");
  console.log(capLettersUser);

  specialCharactersUser = confirm("Use special characters?");
  console.log(specialCharactersUser);  

  // logical operators to determine if restart required due to user not selecting any characters for password generation

  if (
    numbersUser === false &&
    lowLettersUser === false &&
    capLettersUser === false &&
    specialCharactersUser === false
  ) {
    alert(
      "You must select a password length of between 8 and 128 characters in addition to one of the following options to generate a password: numbers, lower case letters, upper case letters, or special characters."
    );
    return;
  }

  // create concatenated array containing user selected characters. will use ~~Math.random to select random characters from the array until generated password length matches the user input for passLengthUser

  if (numbersUser === true) {
    concatArray = concatArray.concat(numbersArray);
  }
  if (lowLettersUser === true) {
    concatArray = concatArray.concat(lowLettersArray);
  }
  if (capLettersUser === true) {
    concatArray = concatArray.concat(capLettersArray);
  }
  if (specialCharactersUser === true) {
    concatArray = concatArray.concat(specialCharactersArray);
  }
  console.log(concatArray);
  console.log(passLengthUser);
  console.log(result);

  // for 3 statements usually var / conditional / var++--. all statements optional. use blank ; to skip

  for (let i = 0; i < passLengthUser; i++) {
    result += concatArray[~~(Math.random() * concatArray.length)];
    console.log();
  }
  return result;
}
