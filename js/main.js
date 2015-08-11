/*global Palette: false, generateRandomCSS*/
function extractCSSColors() {
  'use strict';
  
  var cssText;

  function displayPalette(collection, parent) {
    var i, l, out = [],
      size = 10;
    for (i = 0, l = collection.length; i < l; ++i) {
      size = Math.min(25, (1 + Math.log(collection[i].count)) * 0.3).toFixed(2) + "%";
      out.push('<span class="color" style="background:' + collection[i].original + '; width:' + size + '" title="' + collection[i].original + ": " + collection[i].count + 'x" onclick="selectCurrentColor(\'' + collection[i].original + '\')"><em>' + collection[i].original + '</em></span>');
    }
    parent.innerHTML = out.join("");
  }

  window.document.getElementById('selected-color').value = 'none';
  cssText = window.document.getElementById('source').value;
  if (cssText) {
    window.extractCSSColorsTries = 0;
    Palette.init(window.document.getElementById('source').value);
    displayPalette(Palette.bw, window.document.getElementById('bw'));
    displayPalette(Palette.colors, window.document.getElementById('colors'));
  } else {
    window.extractCSSColorsTries = (window.extractCSSColorsTries || 0) + 1;
    if (window.extractCSSColorsTries > 3) {
      generateRandomCSS(1000, 56);
    }
  }
}

function selectCurrentColor(color) {
  'use strict';

  var element;
  element = window.document.getElementById('selected-color');
  element.value = color;
  element.select();
}