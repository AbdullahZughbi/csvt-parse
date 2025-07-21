const csvt = require('@abdullah_zughbi/csvt-parse');
const path = require('path');

const filePath = path.join(__dirname, 'example.csvt');
const fileData = csvt.readFileSync(filePath);
console.log(fileData.data);

const data = [
  { name: 'Alice', score: 95, active: true },
  { name: 'Bob', score: 87, active: false }
];

const columns = [
  { name: 'name', type: 'string' },
  { name: 'score', type: 'number' },
  { name: 'active', type: 'boolean' }
];

csvt.writeFileSync(path.join(__dirname, 'output.csvt'), data, columns);
