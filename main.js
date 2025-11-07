import './style.css'
import { generatePassword } from './passwordGenerator.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Secure Password Generator</h1>
    <p class="subtitle">Create unbreakable passwords with military-grade randomness</p>
    
    <div class="container">
      <div class="password-display">
        <input type="text" id="password-output" readonly value="Generating...">
        <button id="copy-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </button>
      </div>
      
      <div class="strength-indicator">
        <div class="strength-bar"></div>
        <div class="strength-bar"></div>
        <div class="strength-bar"></div>
        <div class="strength-bar"></div>
      </div>
      
      <div class="options-section">
        <div class="length-section">
          <div class="length-header">
            <span class="length-label">Password Length</span>
            <span class="length-value" id="length-value">16</span>
          </div>
          <input type="range" id="password-length" min="8" max="64" value="16">
        </div>
        
        <div class="option-group">
          <label class="option-label">
            <div class="option-text">
              <span class="option-title">Uppercase Letters</span>
              <span class="option-description">A-Z</span>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="uppercase" checked>
              <span class="toggle-slider"></span>
            </div>
          </label>
        </div>
        
        <div class="option-group">
          <label class="option-label">
            <div class="option-text">
              <span class="option-title">Lowercase Letters</span>
              <span class="option-description">a-z</span>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="lowercase" checked>
              <span class="toggle-slider"></span>
            </div>
          </label>
        </div>
        
        <div class="option-group">
          <label class="option-label">
            <div class="option-text">
              <span class="option-title">Numbers</span>
              <span class="option-description">0-9</span>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="numbers" checked>
              <span class="toggle-slider"></span>
            </div>
          </label>
        </div>
        
        <div class="option-group">
          <label class="option-label">
            <div class="option-text">
              <span class="option-title">Special Characters</span>
              <span class="option-description">!@#$%^&*</span>
            </div>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="symbols" checked>
              <span class="toggle-slider"></span>
            </div>
          </label>
        </div>
      </div>
      
      <button id="generate-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
        </svg>
        Generate Password
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
const strengthBars = document.querySelectorAll('.strength-bar');
const copiedFeedback = document.querySelector('.copied-feedback');

// Update length value display
lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
  createPassword();
});

// Calculate password strength
function calculateStrength(password, options) {
  let strength = 0;
  const length = password.length;
  
  // Length contribution
  if (length >= 8) strength += 1;
  if (length >= 12) strength += 1;
  if (length >= 16) strength += 1;
  
  // Character variety contribution
  let varietyCount = 0;
  if (options.uppercase) varietyCount++;
  if (options.lowercase) varietyCount++;
  if (options.numbers) varietyCount++;
  if (options.symbols) varietyCount++;
  
  if (varietyCount >= 3) strength += 1;
  
  return Math.min(strength, 4);
}

// Update strength indicator
function updateStrengthIndicator(strength) {
  strengthBars.forEach((bar, index) => {
    bar.classList.remove('active', 'weak', 'medium', 'strong');
    if (index < strength) {
      bar.classList.add('active');
      if (strength <= 2) bar.classList.add('weak');
      else if (strength === 3) bar.classList.add('medium');
      else bar.classList.add('strong');
    }
  });
}

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
    passwordOutput.value = 'Select at least one option';
    updateStrengthIndicator(0);
    return;
  }
  
  const password = generatePassword(length, options);
  passwordOutput.value = password;
  
  const strength = calculateStrength(password, options);
  updateStrengthIndicator(strength);
}

// Generate initial password
createPassword();

// Event listeners
generateButton.addEventListener('click', () => {
  generateButton.classList.add('loading');
  setTimeout(() => {
    createPassword();
    generateButton.classList.remove('loading');
  }, 300);
});

// Regenerate on checkbox change
[uppercaseCheckbox, lowercaseCheckbox, numbersCheckbox, symbolsCheckbox].forEach(checkbox => {
  checkbox.addEventListener('change', createPassword);
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(passwordOutput.value);
    
    // Visual feedback
    copyButton.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      Copied!
    `;
    copyButton.style.background = 'linear-gradient(135deg, var(--success) 0%, #059669 100%)';
    
    // Show feedback toast
    copiedFeedback.classList.add('show');
    
    setTimeout(() => {
      copyButton.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        Copy
      `;
      copyButton.style.background = '';
      copiedFeedback.classList.remove('show');
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
});
