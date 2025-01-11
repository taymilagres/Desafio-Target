const fs = require("fs");


const filePath = "dados.json"; 
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));


const validDays = data.filter(day => day.valor > 0);


const minValue = Math.min(...validDays.map(day => day.valor));
const maxValue = Math.max(...validDays.map(day => day.valor));


const total = validDays.reduce((sum, day) => sum + day.valor, 0);
const average = total / validDays.length;


const aboveAverageDays = validDays.filter(day => day.valor > average).length;


console.log(`Menor valor de faturamento ocorrido em um dia do mês: ${minValue.toFixed(2)}`);
console.log(`Maior valor de faturamento ocorrido em um dia do mês: ${maxValue.toFixed(2)}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${aboveAverageDays}`);