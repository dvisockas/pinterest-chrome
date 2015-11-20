'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
  // window.alert('yo');
});

console.log('\'Allo \'Allo! Event Page');
//# sourceMappingURL=background.js.map
