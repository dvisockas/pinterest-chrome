'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
  // window.alert('yo');
});

console.log('\'Allo \'Allo! Event Page');
