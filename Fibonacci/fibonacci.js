const readline = require('readline');

function isFibonacci(num) {
    if (num < 0) return false; 

    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) {
            return true; 
        }
        [a, b] = [b, a + b]; 
    }

    return false; 
}

// Entrada pelo console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite um número para verificar se ele pertence à sequência de Fibonacci: ', (input) => {
    const number = parseInt(input, 10); 

    if (isNaN(number)) {
        console.log('Insira um numero válido.');
    } else if (isFibonacci(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }

    rl.close(); 
});