const csvt = require('@abdullah_zughbi/csvt-parse');

const csvtContent = `name:string,age:number,active:boolean
"John Doe",30,true
"Jane Smith",25,false`;

const result = csvt.parseCSVTSync(csvtContent);
console.log(result.data);
