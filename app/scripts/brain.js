'use strict';

function mineGems(e) {
  var text = e.target.innerText;
  if (text.match(/gem ('|").*('|")/gi)) {
    e.target.style.backgroundColor = 'red';
    var req = new XMLHttpRequest();
    req.open('GET', 'http://api.alongapp.com/?append=' + text);
    req.send();
  }
}

// atejo requestasatejo requestas

var gems = Array.prototype.slice.call(document.querySelectorAll('pre'));

gems.forEach(function (gem) {
  gem.addEventListener('click', mineGems);
});
//# sourceMappingURL=brain.js.map
