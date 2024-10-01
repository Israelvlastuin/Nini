var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");

// Função para gerar um número aleatório entre 0 e o valor máximo
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Função para definir a posição aleatória de um botão
function setPosition(button) {
    button.style.top = `${getRandomNumber(window.innerHeight)}px`;
    button.style.left = `${getRandomNumber(window.innerWidth)}px`;
}

// Defina a posição inicial do botão 1
setPosition(botao1);

botao1.addEventListener("click", function() {
    botao1.style.display = "none";
    botao2.style.display = "block";
    setPosition(botao2);
});

botao2.addEventListener("click", function() {
    botao2.style.display = "none";
    botao3.style.display = "block";
    setPosition(botao3);
});

botao3.addEventListener("click", function() {
    botao3.style.display = "none";
    botao4.style.display = "block";
    setPosition(botao4);
});

// transicao do botao//
document.getElementById('botao4').addEventListener('click', function() {
  document.body.classList.add('fade-out');
  setTimeout(function() {
    window.location.href = 'text.html';
  }, 500); // tempo de transição
}); 