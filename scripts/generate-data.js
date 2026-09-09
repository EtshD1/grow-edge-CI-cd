const fs = require('fs');
const path = require('path');

const numbers = Array.from({ length: 10 }, (_, i) => (i + 1) * 3);

const dataDir = path.join(__dirname, '..', 'data');
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(
  path.join(dataDir, 'numbers.json'),
  JSON.stringify(numbers, null, 2)
);

console.log('Generated numbers:', numbers);
