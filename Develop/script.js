// Assignment code here

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbol = ['~', '!', '@', '#', '$', '%', '^', '&', '*',];
var passChar = [];
var passwordString = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = parseInt(passLength);

  passLength = prompt("Please enter the number of characters you would like in your password.");

  if (passLength < 8 || passLength > 128 || passLength === NaN) {
    alert("Password must be between 8 and 128 characters!");
    return;
  }

  var numberQ = confirm("Do you want numbers in your password?");
  if (numberQ === true) {
    passChar = passChar.concat(number);
  }

  var lowerQ = confirm("Do you want lowercase letters in your password?");
  if (lowerQ === true) {
    passChar = passChar.concat(lower);
  }

  var upperQ = confirm("Do you want uppercase letters in your password?");
  if (upperQ === true) {
    passChar = passChar.concat(upper);
  }

  var symbolQ = confirm("Do you want symbols in your password?");
  if (symbolQ === true) {
    passChar = passChar.concat(symbol);
  }

  else {
    alert("Please choose at least one.");
  }

  console.log(passChar);


  for (let i = 0; i < passLength; i++) {
    var randomPass = passChar[Math.floor(Math.random() * passChar.length)]
    passwordString += randomPass;
  }
  return passwordString;

 

}
