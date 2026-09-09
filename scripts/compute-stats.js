const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const numbers = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'numbers.json'), 'utf8')
);

const average = numbers.reduce((total, n) => total + n, 0) / numbers.length;
const max = Math.max(...numbers);

fs.writeFileSync(
  path.join(dataDir, 'stats.json'),
  JSON.stringify({ average, max }, null, 2)
);

console.log('Stats:', { average, max });