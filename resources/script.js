// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password criteria
var pwdCriteria = {
  pwdLength: 0,
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the password
function generatePassword() {
  var password = "";
  var availableCharacters = [];
  
  pwdCriteria.pwdLength = prompt("Enter the desired password length (8-128 characters):");
  
  if (pwdCriteria.pwdLength < 8 || pwdCriteria.pwdLength > 128) {
    alert("Password length needs to be between 8 and 128 characters.");
    return "";
  }
  
  var includeLowerCase = confirm("Include lowercase letters?");
  var includeUpperCase = confirm("Include uppercase letters?");
  var includeNumber = confirm("Include numbers?");
  var includeSpecialChar = confirm("Include special characters?");
  
  if (!includeLowerCase && !includeUpperCase && !includeNumber && !includeSpecialChar) {
    alert("At least one character type should be selected.");
    return "";
  }
  
  if (includeLowerCase) {
    availableCharacters = availableCharacters.concat(pwdCriteria.pwdLowerCase);
  }
  
  if (includeUpperCase) {
    availableCharacters = availableCharacters.concat(pwdCriteria.pwdUpperCase);
  }
  
  if (includeNumber) {
    availableCharacters = availableCharacters.concat(pwdCriteria.pwdNumber);
  }
  
  if (includeSpecialChar) {
    availableCharacters = availableCharacters.concat(pwdCriteria.pwdCharacter);
  }

  var hasLowerCase = false;
  var hasUpperCase = false;
  var hasNumber = false;
  var hasSpecialChar = false;

  while (!(hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar)) {
    password = "";
    hasLowerCase = false;
    hasUpperCase = false;
    hasNumber = false;
    hasSpecialChar = false;

    for (var i = 0; i < pwdCriteria.pwdLength; i++) {
      var randomIndex = Math.floor(Math.random() * availableCharacters.length);
      var randomChar = availableCharacters[randomIndex];
      password += randomChar;

      if (pwdCriteria.pwdLowerCase.includes(randomChar)) {
        hasLowerCase = true;
      } else if (pwdCriteria.pwdUpperCase.includes(randomChar)) {
        hasUpperCase = true;
      } else if (pwdCriteria.pwdNumber.includes(randomChar)) {
        hasNumber = true;
      } else if (pwdCriteria.pwdCharacter.includes(randomChar)) {
        hasSpecialChar = true;
      }
    }
  }

  if (!hasLowerCase) {
    alert("Generated password does not meet the lowercase character criteria.");
  }
  if (!hasUpperCase) {
    alert("Generated password does not meet the uppercase character criteria.");
  }
  if (!hasNumber) {
    alert("Generated password does not meet the number criteria.");
  }
  if (!hasSpecialChar) {
    alert("Generated password does not meet the special character criteria.");
  }

  return password;
}