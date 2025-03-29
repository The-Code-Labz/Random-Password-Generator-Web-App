/**
 * Generate a random password based on specified options
 * @param {number} length - The length of the password
 * @param {Object} options - Character types to include
 * @returns {string} - The generated password
 */
export function generatePassword(length, options) {
  // Character sets
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  // Build character pool based on selected options
  let charPool = '';
  if (options.uppercase) charPool += uppercaseChars;
  if (options.lowercase) charPool += lowercaseChars;
  if (options.numbers) charPool += numberChars;
  if (options.symbols) charPool += symbolChars;
  
  // Generate password
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }
  
  // Ensure at least one character from each selected type is included
  let finalPassword = password;
  
  if (options.uppercase && !containsAny(password, uppercaseChars)) {
    const randomUppercase = getRandomChar(uppercaseChars);
    const randomPosition = Math.floor(Math.random() * length);
    finalPassword = replaceCharAt(finalPassword, randomPosition, randomUppercase);
  }
  
  if (options.lowercase && !containsAny(password, lowercaseChars)) {
    const randomLowercase = getRandomChar(lowercaseChars);
    const randomPosition = Math.floor(Math.random() * length);
    finalPassword = replaceCharAt(finalPassword, randomPosition, randomLowercase);
  }
  
  if (options.numbers && !containsAny(password, numberChars)) {
    const randomNumber = getRandomChar(numberChars);
    const randomPosition = Math.floor(Math.random() * length);
    finalPassword = replaceCharAt(finalPassword, randomPosition, randomNumber);
  }
  
  if (options.symbols && !containsAny(password, symbolChars)) {
    const randomSymbol = getRandomChar(symbolChars);
    const randomPosition = Math.floor(Math.random() * length);
    finalPassword = replaceCharAt(finalPassword, randomPosition, randomSymbol);
  }
  
  return finalPassword;
}

/**
 * Check if a string contains any characters from a character set
 */
function containsAny(str, charSet) {
  for (let i = 0; i < str.length; i++) {
    if (charSet.includes(str[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Get a random character from a character set
 */
function getRandomChar(charSet) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

/**
 * Replace a character at a specific position in a string
 */
function replaceCharAt(str, index, char) {
  return str.substring(0, index) + char + str.substring(index + 1);
}
