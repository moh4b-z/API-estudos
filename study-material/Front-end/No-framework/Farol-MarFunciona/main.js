'use strict';

// Função para gerar as estrelas
function generateStars() {
    const starsContainer = document.querySelector('.stars.layer');
    const numberOfStars = 80;

    for (let i = 1; i <= numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        starsContainer.appendChild(star);
    }
}

// Inicializar o efeito de parallax
function initParallax() {
    const scene = document.getElementById('scene');
    if (scene) {
        const parallax = new Parallax(scene, {
            selector: '.layer'
        });
    } else {
        console.error('Elemento #scene não encontrado.');
    }
}

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    generateStars(); // Gerar as estrelas
    initParallax();  // Inicializar o parallax
});