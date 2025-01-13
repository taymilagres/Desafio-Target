const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);


function calcularPercentuais() {
    
    const totalElement = document.getElementById('total');
    totalElement.innerHTML = `Total: R$ ${total.toFixed(2)}`;

    
    const resultadosList = document.getElementById('resultadosList');
    resultadosList.innerHTML = '';

    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / total) * 100;

       
        const estadoElement = document.createElement('div');
        estadoElement.textContent = `${estado}: ${percentual.toFixed(2)}%`;

        
        resultadosList.appendChild(estadoElement);
    }
}


document.getElementById('calcular').addEventListener('click', calcularPercentuais);
