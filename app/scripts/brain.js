'use strict';

function init() {
  window.console.log('loadded');

  function forceShowPinterest(show) {
    var img = document.querySelector('#pinterest');

    if (show) {
      img.className = img.className + ' visible';
      window.console.log('drag');
    } else {
      img.className = img.className.replace(/visible/g, '');
    }
  }

  function showImage(src) {
    var picture = document.querySelector('#pinterest-picture');
    picture.className = picture.className.replace(/hidden/g, '');
    picture.src = src;
    forceShowPinterest(true);
  }

  function attachImage() {
    var img = document.createElement('img');
    img.src = chrome.extension.getURL('images/pinterest.png');
    img.id = 'pinterest';
    var src = document.querySelector('body');
    src.appendChild(img);

    img.ondragover = function (event) {
      event.preventDefault();
    };

    img.ondrop = function () {
      window.console.log('drop');
      var src = window.pinterestSrc;
      showImage(src);
      window.pinterestSrc = null;
    };

    img = document.createElement('img');
    img.id = 'pinterest-picture';
    src.appendChild(img);
    img.className = 'hidden';

    document.querySelector('#pinterest-picture').onclick = function (event) {
      event.target.className = 'hidden';
      forceShowPinterest(false);
    };
  }

  function showPinterest(show) {
    var img = document.querySelector('#pinterest');

    if (show) {
      img.className = img.className + 'pop';
      window.console.log('drag');
    } else {
      window.setTimeout(function () {
        img.className = img.className.replace(/pop/g, '');
      }, 500);
    }
  }

  attachImage();

  function checkImages() {
    var images = Array.prototype.slice.call(document.querySelectorAll('img'));

    images.forEach(function (image) {
      image.ondragstart = function (event) {
        showPinterest(true);
        window.console.log(event.target.src);
        event.dataTransfer.src = event.target.src;
        window.pinterestSrc = event.target.src;
      };
      image.ondragend = function () {
        console.log(window.pinterestSrc);
        showPinterest(false);
      };
      image.draggable = true;
    });
  }

  window.setTimeout(checkImages, 1000);
}

window.onload = init;
//# sourceMappingURL=brain.js.map
