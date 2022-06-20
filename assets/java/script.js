// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// standard array var specialCharacters = ["!,@,#"];

// split method usage ="1234".split(");

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

var passwordArray = {
  //Object literal structure key : value

  var: (numbersArray = "123456789".split("")),

  var: (lowLettersArray = "abcdefghijklmnopqrstuvwxyz".split("")),

  var: (capLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),

  var: (specialCharactersArray = "!@#$%^&*()".split("")),
};

function generatePassword() {
  //Z objects for user input

  var passLengthUser = 0;
  var numbersUser = "";
  var lowLettersUser = "";
  var capLettersUser = "";
  var specialCharactersUser = "";
  var result = "";

  passLengthUser = window.prompt("Password length from 8 to 128 characters");

  if (passLengthUser < 8) {
    window.alert("Please choose from 8 to 128 characters.");
    // return;
  } else if (passLengthUser > 128) {
    window.alert("Please choose from 8 to 128 characters.");
    // return;
  }

  console.log(passLengthUser);

  numbersUser = window.prompt("User numbers?");

  lowLettersUser = window.prompt("Use lower case characters?");

  capLettersUser = window.prompt("Use upper case characters?");

  specialCharactersUser = window.prompt("Use special characters?");

  if (numbersUser) {
    result = result.concat(passwordArray.numbersArray);
  }

  if (lowLettersUser) {
    result = result.concat(passwordArray.numbersArray);
  }

  if (capLettersUser) {
    result = result.concat(passwordArray.capLettersArray);
  }

  if (specialCharactersUser) {
    result = result.concat(passwordArray.specialCharactersArray);
  }

  while (result < passLengthUser) {
    if (
      numbersUser === false &&
      lowLettersUser === false &&
      capLettersUser === false &&
      specialCharactersUser === false
    )
      window.alert(
        "You must choose to use at least one of the following: numbers, lower case letters, upper case letters, or special characters."
      );
  }



}
