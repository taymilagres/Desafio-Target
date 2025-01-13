
const validacaoDays = data.filter(day => day.valor > 0);

const minValue = Math.min(...validacaoDays.map(day => day.valor));
const maxValue = Math.max(...validacaoDays.map(day => day.valor));
const total = validacaoDays.reduce((sum, day) => sum + day.valor, 0);
const average = total / validacaoDays.length;
const aboveAverageDays = validacaoDays.filter(day => day.valor > average).length;

// cards
function exibirDados(dados) {
    const container = document.querySelector('.data');

    dados.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <p class="textDia"><strong>Dia ${item.dia}</strong></p>
            <p class="textValor"><strong>Valor:</strong> R$ ${item.valor.toFixed(2)}</p>
        `;

        container.appendChild(card);
    });
}


function exibirResultados() {
    const resultadosContainer = document.getElementById('resultadosList');

    resultadosContainer.innerHTML = `
        <p class="strongResult"><strong>Menor valor do mês:</strong> R$ ${minValue.toFixed(2)}</p>
        <p class="strongResult"><strong>Maior valor do mês:</strong> R$ ${maxValue.toFixed(2)}</p>
        <p class="strongResult"><strong>Média mensal:</strong> R$ ${average.toFixed(2)}</p>
        <p class="strongResult"><strong>Dias acima da média:</strong> ${aboveAverageDays} dias</p>
    `;
}


exibirDados(data);
