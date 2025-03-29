import './style.css'
import { generatePassword } from './passwordGenerator.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Random Password Generator</h1>
    <div class="password-display">
      <input type="text" id="password-output" readonly>
      <button id="copy-button">Copy</button>
    </div>
    
    <div class="options">
      <div class="length-option">
        <label for="password-length">Password Length: <span id="length-value">12</span></label>
        <input type="range" id="password-length" min="4" max="32" value="12">
      </div>
      
      <div class="character-options">
        <div class="option">
          <input type="checkbox" id="uppercase" checked>
          <label for="uppercase">Include Uppercase Letters (A-Z)</label>
        </div>
        <div class="option">
          <input type="checkbox" id="lowercase" checked>
          <label for="lowercase">Include Lowercase Letters (a-z)</label>
        </div>
        <div class="option">
          <input type="checkbox" id="numbers" checked>
          <label for="numbers">Include Numbers (0-9)</label>
        </div>
        <div class="option">
          <input type="checkbox" id="symbols">
          <label for="symbols">Include Symbols (!@#$%^&*)</label>
        </div>
      </div>
    </div>
    
    <button id="generate-button">Generate Password</button>
  </div>
`

// DOM elements
const passwordOutput = document.getElementById('password-output');
const copyButton = document.getElementById('copy-button');
const lengthSlider = document.getElementById('password-length');
const lengthValue = document.getElementById('length-value');
const generateButton = document.getElementById('generate-button');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

// Update length value display
lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

// Generate password
function createPassword() {
  const length = parseInt(lengthSlider.value);
  const options = {
    uppercase: uppercaseCheckbox.checked,
    lowercase: lowercaseCheckbox.checked,
    numbers: numbersCheckbox.checked,
    symbols: symbolsCheckbox.checked
  };
  
  // Ensure at least one option is selected
  if (!options.uppercase && !options.lowercase && !options.numbers && !options.symbols) {
    alert('Please select at least one character type');
    return;
  }
  
  const password = generatePassword(length, options);
  passwordOutput.value = password;
}

// Generate initial password
createPassword();

// Event listeners
generateButton.addEventListener('click', createPassword);

copyButton.addEventListener('click', () => {
  passwordOutput.select();
  document.execCommand('copy');
  
  // Visual feedback
  copyButton.textContent = 'Copied!';
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 2000);
});
