// script.js
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');

let index = 0;

// Função para avançar o carrossel
function moveCarousel() {
    index++;
    if (index >= cards.length) {
        index = 0; // Volta ao início
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Inicia o carrossel automático
setInterval(moveCarousel, 3000); // Troca a cada 3 segundos


const menuToggle = document.getElementById("menu-toggle");
const itens = document.getElementById("itens");

menuToggle.addEventListener("click", () => {
    itens.style.display = itens.style.display === "flex" ? "none" : "flex";
});

