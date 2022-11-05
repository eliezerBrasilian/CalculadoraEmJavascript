const input = document.getElementById("input");
const botaoIgual = document.getElementById("botao-igual");
const botaoApagar = document.getElementById("botao-apagar");

/*acessando a classe botao-chave e pra cada item dela, eu adiciona um evento de clique e pego o valor do data*/
document.querySelectorAll(".botao-chave").forEach(function (botaoChave) {
  botaoChave.addEventListener("click", function () {
    const valorDentroDoBotaoChave = botaoChave.dataset.value; //pegando valores do data
    input.value += valorDentroDoBotaoChave;
  });
});
const valoresPermitidos = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "(",
  ")",
  "+",
  "-",
  "*",
  "/",
  "=",
];

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

document.getElementById("botao-igual").addEventListener("click", calcular);

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

document.getElementById("botao-apagar").addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});
