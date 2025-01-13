function calcularSoma() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    
    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }


    const resultadosContainer = document.getElementById('resultadosList');
    resultadosContainer.innerHTML = `
        <p class="somaResult"><strong>O valor de soma é:</strong> ${soma}</p>
    `;
}
