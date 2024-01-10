// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var length = parseInt(promt("Enter the desired length of your password between 8 and 128 characters) :"));

if (isNaN(length) || length < 8 || length > 128) {
  alert("Please enter a valid number between 8 and 128.");
    return;
  }
var includeLower = confirm("Include lowercase characters?");
var includeUpper = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
  alert("Please select at least one character type.");
  return;
}

return {
  length: length,
  includeLower: includeLower,
  includeUpper: includeUpper,
  includeNumeric: includeNumeric,
  includeSpecial: includeSpecial
};
}

// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();

var allCharacters = [];
var result = [];

if (options.includeLower) {
  allCharacters = allCharacters.concat(lowerCasedCharacters);
  result.push(getRandom(lowerCasedCharacters));
}

if (options.includeUpper) {
  allCharacters = allCharacters.concat(upperCasedCharacters);
  result.push(getRandom(upperCasedCharacters));
}

if (options.includeSpecial) {
  allCharacters = allCharacters.concat(specialCharacters);
  result.push(getRandom(specialCharacters));
}

for (var i = result.length; i < options.length; i++) {
  result.push(getRandom(allCharacters));
}

return result.join('');
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);