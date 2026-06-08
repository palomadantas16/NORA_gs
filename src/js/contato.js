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

// fecha menu ao clicar num link
navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navUl.classList.remove('open'));
});

// mudança de cor da página 
function mudarFundo(cor){
    document.body.style.background=cor;
}

// dropdown tema
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
    dropdown.classList.remove('open');
});