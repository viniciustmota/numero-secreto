const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAletorio()

function gerarNumeroAletorio() {
    return parseInt(Math.random() * maiorValor +1)
}

const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor