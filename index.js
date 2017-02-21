var signBunny = require('sign-bunny');
require('./index.css');

var chalk = require('chalk');

var asciiArt = signBunny('Best NPM Package Ever');

console.log( chalk.green(asciiArt) );

var lapinHtml = document.createElement('p');
lapinHtml.style.whiteSpace = 'pre';
lapinHtml.textContent = asciiArt;

document.body.appendChild(lapinHtml);

console.log('test test test');
