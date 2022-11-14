import {
  input,
  botaoIgual,
  botaoApagar,
  valoresPermitidos,
} from "./variaveis.js";

function verificaSeInputEstaVazio() {
  if (input.value == "") {
    input.value = 0;
    return true;
  }
  return false;
}
function calcular() {
  if (verificaSeInputEstaVazio() === false) {
    const resultado = eval(input.value);
    input.value = resultado;
  }
}

function eventoBotaoIgual() {
  botaoIgual.addEventListener("click", calcular);
}

function selectorBotaoChave() {
  document.querySelectorAll(".botao-chave").forEach(function (botaoChave) {
    botaoChave.addEventListener("click", function () {
      const valorDentroDoBotaoChave = botaoChave.dataset.value; //pegando valores do data
      input.value += valorDentroDoBotaoChave;
    });
  });
}

function funcaoEventoDoTecado() {
  input.addEventListener("keydown", function (evento) {
    evento.preventDefault();
    if (valoresPermitidos.includes(evento.key)) {
      input.value += evento.key;
      return;
    }
    if (evento.key == "Backspace") {
      input.value = input.value.slice(0, -1); //cortando o ultimo elemento
    }
    if (evento.key == "Enter") {
      if (input.value == "") {
        input.value = 0;
      } else calcular();
    }
    if (evento.key == " ") {
      input.value += " ";
    }
  });
}

function eventoBotaoApagar() {
  botaoApagar.addEventListener("click", function () {
    input.value = input.value.slice(0, -1);
  });
}

export {
  verificaSeInputEstaVazio,
  calcular,
  eventoBotaoIgual,
  selectorBotaoChave,
  funcaoEventoDoTecado,
  eventoBotaoApagar,
};
