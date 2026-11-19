const sum = require('../sum');

const title = document.createElement('h1');
title.textContent = 'Lab 2 - GitHub Actions';
document.body.appendChild(title);

const result = document.createElement('p');
result.textContent = '2 + 3 = ' + sum(2, 3);
document.body.appendChild(result);
