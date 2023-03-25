// Pegando os valores que serão adicionados ao input e atribuindo os mesmos a variaveis
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
// Deixando o foco no peso
peso.focus();

//Função para realizar o calculo do imc
function getIMC() {
  // Atribuindo o valor do imc calculado a uma variavel para poder chama - la e puxando os valores inseridos no peso e na altura.

  if (altura.value > 100) {
    altura.value = altura.value / 100;
  }

  let imc = peso.value / (altura.value * altura.value);
  // Limpa os valores digitados para uma nova consulta
  peso.value = "";
  altura.value = "";
  // Adicionando um texto a um elemento vazio para exibir o resultado
  document.querySelector("#result").innerText = "Seu imc é de " + imc;

  function checkIMC() {
    let text = "Você esta classificado como ";
    if (imc < 18.5) {
      document.querySelector("#info").innerText = text + "Desnutrição";
    } else if (imc >= 18.5 && imc <= 24.9) {
      document.querySelector("#info").innerText = text + "Normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
      document.querySelector("#info").innerText = text + "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
      document.querySelector("#info").innerText = text + "Obesidade grau I";
    } else if (imc >= 35.0 && imc <= 39.9) {
      document.querySelector("#info").innerText = text + "Obesidade grau II";
    } else if (imc > 40.0) {
      document.querySelector("#info").innerText = text + "Obesidade grau III";
    }
  }
  checkIMC();
}

// Selecionando o botão
let button = document.querySelector("button");

//Realizando a chamada do botão e associando o mesmo com o onclick, recebendo a função getIMC

button.onclick = getIMC;
