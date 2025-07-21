const csvt = require('@abdullah_zughbi/csvt-parse');

const escapeCSVT = `message:string,path:string
"Line 1\\nLine 2","C:\\\\Users\\\\file.txt"`;

const processedResult = csvt.parseCSVTSync(escapeCSVT, { processEscapes: true });
console.log(processedResult.data[0].message);
