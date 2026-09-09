// scripts/compute-sum.js
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const numbers = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'numbers.json'), 'utf8')
);

const sum = numbers.reduce((total, n) => total + n, 0);

fs.writeFileSync(
  path.join(dataDir, 'sum.json'),
  JSON.stringify({ sum }, null, 2)
);

console.log('Sum:', sum);