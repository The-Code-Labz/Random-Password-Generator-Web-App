import './style.css'
import { generatePassword } from './passwordGenerator.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Password Generator</h1>
    <p class="subtitle">Create secure, random passwords instantly</p>
    
    <div class="container">
      <div class="password-display">
        <input type="text" id="password-output" readonly>
        <button id="copy-button">Copy</button>
      </div>
      
      <div class="options">
        <div class="length-option">
          <label for="password-length">
            <span>Password Length</span>
            <span id="length-value">16</span>
          </label>
          <input type="range" id="password-length" min="4" max="60" value="16">
        </div>
        
        <div class="character-options">
          <div class="option">
            <input type="checkbox" id="uppercase" checked>
            <label for="uppercase">
              <span class="option-icon">A</span>
              <span>Uppercase Letters (A-Z)</span>
            </label>
          </div>
          <div class="option">
            <input type="checkbox" id="lowercase" checked>
            <label for="lowercase">
              <span class="option-icon">a</span>
              <span>Lowercase Letters (a-z)</span>
            </label>
          </div>
          <div class="option">
            <input type="checkbox" id="numbers" checked>
            <label for="numbers">
              <span class="option-icon">0</span>
              <span>Numbers (0-9)</span>
            </label>
          </div>
          <div class="option">
            <input type="checkbox" id="symbols">
            <label for="symbols">
              <span class="option-icon">@</span>
              <span>Symbols (!@#$%^&*)</span>
            </label>
          </div>
        </div>
      </div>
      
      <button id="generate-button">
        <span>Generate Password</span>
      </button>
    </div>
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
  const originalText = copyButton.textContent;
  copyButton.textContent = 'Copied!';
  copyButton.style.background = 'linear-gradient(135deg, var(--success) 0%, #059669 100%)';
  
  setTimeout(() => {
    copyButton.textContent = originalText;
    copyButton.style.background = '';
  }, 2000);
});
