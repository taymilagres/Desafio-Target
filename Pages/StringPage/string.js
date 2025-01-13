function inverterString(str) {
    let r = '';
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    return r;
}

function exibirString() {
    const input = document.getElementById('stringInput').value; 
    const divRes = document.getElementById('resultadosList');  

    if (input.trim() === '') { 
        divRes.textContent = 'Por favor, insira uma frase.';
        divRes.style.color = '#502c2c'; 
        divRes.classList.add('with-background');
    } else {
        const result = inverterString(input); 
        divRes.textContent = ` ${result}`; 
        divRes.style.color = '#093203';
        divRes.classList.add('with-background');
    }
}