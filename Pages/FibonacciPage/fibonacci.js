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

function ChecarFibonacci(){
    const input = document.getElementById('fibonacciNumber').value;
    const number = parseInt(input, 10);
    const divRes =document.getElementById('resultadosList');

    if (isNaN(number)){
        divRes.textContent = 'Insira um número válido';
        divRes.style.color = '#502c2c';
        divRes.classList.add('with-background');
    }else if(isFibonacci(number)){
        divRes.textContent = `${number} pertence à sequência Fibonacci!`;
        divRes.style.color = '#093203';
        divRes.classList.add('with-background');

    }else {
        divRes.textContent = `${number} não pertence à sequência Fibonacci!`;
        divRes.style.color = '#502c2c';
        divRes.classList.add('with-background');;
    }
}
