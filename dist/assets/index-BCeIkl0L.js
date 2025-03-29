(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();function g(o,e){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZ",d="abcdefghijklmnopqrstuvwxyz",t="0123456789",n="!@#$%^&*()_+-=[]{}|;:,.<>?";let r="";e.uppercase&&(r+=s),e.lowercase&&(r+=d),e.numbers&&(r+=t),e.symbols&&(r+=n);let i="";for(let c=0;c<o;c++){const l=Math.floor(Math.random()*r.length);i+=r[l]}let a=i;if(e.uppercase&&!u(i,s)){const c=p(s),l=Math.floor(Math.random()*o);a=m(a,l,c)}if(e.lowercase&&!u(i,d)){const c=p(d),l=Math.floor(Math.random()*o);a=m(a,l,c)}if(e.numbers&&!u(i,t)){const c=p(t),l=Math.floor(Math.random()*o);a=m(a,l,c)}if(e.symbols&&!u(i,n)){const c=p(n),l=Math.floor(Math.random()*o);a=m(a,l,c)}return a}function u(o,e){for(let s=0;s<o.length;s++)if(e.includes(o[s]))return!0;return!1}function p(o){const e=Math.floor(Math.random()*o.length);return o[e]}function m(o,e,s){return o.substring(0,e)+s+o.substring(e+1)}document.querySelector("#app").innerHTML=`
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
`;const h=document.getElementById("password-output"),f=document.getElementById("copy-button"),b=document.getElementById("password-length"),v=document.getElementById("length-value"),w=document.getElementById("generate-button"),C=document.getElementById("uppercase"),I=document.getElementById("lowercase"),P=document.getElementById("numbers"),x=document.getElementById("symbols");b.addEventListener("input",()=>{v.textContent=b.value});function y(){const o=parseInt(b.value),e={uppercase:C.checked,lowercase:I.checked,numbers:P.checked,symbols:x.checked};if(!e.uppercase&&!e.lowercase&&!e.numbers&&!e.symbols){alert("Please select at least one character type");return}const s=g(o,e);h.value=s}y();w.addEventListener("click",y);f.addEventListener("click",()=>{h.select(),document.execCommand("copy"),f.textContent="Copied!",setTimeout(()=>{f.textContent="Copy"},2e3)});
