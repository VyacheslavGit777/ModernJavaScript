'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.body.append(document.createElement('button'));
document.body.append(document.createElement('button'));

const buttonsDoc = document.querySelectorAll('button');
buttonsDoc[0].textContent = 'First';
buttonsDoc[1].textContent = 'Second';
buttonsDoc[2].textContent = 'Author';

const underscoreToCamel = function () {
  const underscoreString = document.querySelector('textarea').value;
  let finStr = '';
  const strSplit = underscoreString.split('\n');
  for (let i = 0; i <= strSplit.length - 1; i++) {
    const str = strSplit[i].trim().toLowerCase().split('_');
    for (const word of str) {
      finStr += word[0].toUpperCase() + word.slice(1);
    }
    finStr = finStr[0].toLowerCase() + finStr.slice(1);
    console.log(finStr);
    finStr = '';
  }
};

const twoWordsUnderToCamel = function () {
  const underscoreString = document.querySelector('textarea').value;
  const strSplit = underscoreString.split('\n');
  for (let i = 0; i <= strSplit.length - 1; i++) {
    let str = strSplit[i].trim().toLowerCase();
    const indOfSeparator = str.indexOf('_');
    str = str.replace('_', '');
    str =
      str.slice(0, indOfSeparator) +
      str[indOfSeparator].toUpperCase() +
      str.slice(indOfSeparator + 1);
    //str[indOfSeparator] = str[indOfSeparator].toUpperCase();
    console.log(str);
  }
};

const courseAuthorDecision = function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  for (const line of lines) {
    const [firstPart, secondPart] = line.toLowerCase().trim().split('_');
    const output = `${firstPart}${secondPart.replace(
      secondPart[0],
      secondPart[0].toUpperCase()
    )}`;
    console.log(output);
  }
};

buttonsDoc[0].addEventListener('click', underscoreToCamel);
buttonsDoc[1].addEventListener('click', twoWordsUnderToCamel);
buttonsDoc[2].addEventListener('click', courseAuthorDecision);

//document.querySelector('button').addEventListener('click', underscoreToCamel);
