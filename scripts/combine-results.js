const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const { sum } = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'sum.json'), 'utf8')
);
const { average, max } = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'stats.json'), 'utf8')
);

console.log('Final report');
console.log('------------');
console.log('Sum:', sum);
console.log('Average:', average);
console.log('Max:', max);