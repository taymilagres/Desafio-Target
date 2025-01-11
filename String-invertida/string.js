const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterString(str) {
  let r = '';
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}


rl.question('Digite uma frase: ', (frase) => {
  console.log('Frase invertida: ' + inverterString(frase));
  rl.close(); 
});