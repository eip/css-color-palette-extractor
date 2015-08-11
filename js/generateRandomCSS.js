/*global extractCSSColors: false*/
function generateRandomCSS(numOfRules, colorStep) {
  'use strict';

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function randomHex() {
    var num = randomInt(257);

    num -= num % colorStep;
    num = Math.min(num, 255);
    return ('0' + num.toString(16)).slice(-2);
  }

  function randomColor() {
    return ['#', randomHex(), randomHex(), randomHex()].join('');
  }

  function randomClass(len) {
    var i,
      className = [],
      letters = 'abcdefghijklmnopqrstuvwxyz';

    for (i = 0; i < len; ++i) {
      className.push(letters.charAt(randomInt(letters.length)));
    }
    return className.join('');
  }

  function genCSSRule() {
    return '.' + randomClass(8) + ' {\n  color: ' + randomColor() + ';\n}';
  }

  function genCSS(num) {
    var i,
      rules = [];

    for (i = 0; i < num; ++i) {
      rules.push(genCSSRule());
    }
    return rules.join('\n\n');
  }

  numOfRules = parseInt(numOfRules, 10) >= 1 ? parseInt(numOfRules, 10) : 2000;
  colorStep = parseInt(colorStep, 10) >= 1 ? parseInt(colorStep, 10) : 64;
  window.document.getElementById("source").value = genCSS(numOfRules);
  extractCSSColors();

}