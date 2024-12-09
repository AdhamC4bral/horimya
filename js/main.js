// Obtenha o botão:
mybutton = document.getElementById("scrollUp");

function scrollFunction() {
  // Verifica se a posição de rolagem é maior que a posição sticky
  if (
    document.body.scrollTop > sticky || // Para Safari
    document.documentElement.scrollTop > sticky // Para Chrome, Firefox, IE e Opera
  ) {
    mybutton.style.display = "block"; // Mostra o botão
  } else {
    mybutton.style.display = "none"; // Esconde o botão
  }
}

// Quando o usuário clica no botão, rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

// Navbar Sticky Funcional
window.onscroll = function () {
  myFunction(); // Chama a função de sticky navbar
  scrollFunction(); // Chama a função de exibição do botão de rolagem
};

var navbar = document.querySelector("nav");
var services = document.querySelector("#features");
var sticky = services.offsetTop; // Obtém a posição do elemento de serviços

function myFunction() {
  // Verifica se a posição de rolagem é maior que a posição sticky
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky"); // Adiciona a classe sticky à navbar
  } else {
    navbar.classList.remove("sticky"); // Remove a classe sticky da navbar
  }
}

$(document).ready(function () {
  // Preloader
  document.querySelector(".preloader").classList.add("opacity-0"); // Adiciona a classe para opacidade zero
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none"; // Esconde o preloader após 1 segundo
  }, 1000);

  // Inicialização do Nice Select
  $("select").niceSelect(); // Aplica o plugin niceSelect aos elementos select
});

// Função para abrir o Menu Mobile na Navbar
function openNav() {
  $("#myNav").css("width", "100%"); // Define a largura do menu como 100%
}

// Função para fechar o Menu Mobile na Navbar
function closeNav() {
  $("#myNav").css("width", "0"); // Define a largura do menu como 0
}