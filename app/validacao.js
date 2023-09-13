function VerificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;
  const gameOver = chute

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return;
  }

  if (numeroForMenorOuMaiorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `
        <div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor} </div>
    `;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML +=
      '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>';
  } else {
    elementoChute.innerHTML +=
      '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>';
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMenorOuMaiorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", e => {
        if (e.target.id == "jogar-novamente") {
            window.location.reload();
        }
    });
});

function gameOver(chute){
    if (chute == 'game over' || chute == 'Fim de jogo'){
        document.body.classList.add('game-over')
        document.body.innerHTML = `
            <h2>Game Over</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
    
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
      }
}