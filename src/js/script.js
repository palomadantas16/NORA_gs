// estrelinhas do fundo
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 4}s;
        animation-duration: ${2 + Math.random() * 3}s;
    `;
    starsContainer.appendChild(star);
}

// menu hamburguer
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    navUl.classList.toggle('open');
});

// fecha menu ao clicar num link (EXCETO o botão de tema)
navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Se for o link "Tema", não fecha o menu
        if (link.closest('.dropdown')) return;
        navUl.classList.remove('open');
    });
});
// mudança de cor background
function mudarFundo(cor) {
    document.body.style.background = cor;
}

// dropdown tema
const dropdown = document.querySelector('.dropdown');
const dropdownLink = dropdown.querySelector('a');

dropdownLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});