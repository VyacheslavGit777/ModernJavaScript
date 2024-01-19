'use strict';

/* const runOneTime = function () {
  console.log('You will never see this function call again.');
};

runOneTime(); */

(function () {
  console.log('You will never see this function call again.');
})();

(() => console.log('You will never see this arrow function call again.'))();
