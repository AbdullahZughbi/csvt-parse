const csvt = require('@abdullah_zughbi/csvt-parse');

const enumCSVT = `status:enum(pending,approved,rejected),priority:enum(low,medium,high)
"pending","high"
"approved","medium"
"rejected","low"`;

const enumResult = csvt.parseCSVTSync(enumCSVT);
console.log(enumResult.data);

const unionCSVT = `id:string|number,value:number|boolean
"user123",42
"456",true`;

const unionResult = csvt.parseCSVTSync(unionCSVT);
console.log(unionResult.data);
