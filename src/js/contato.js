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
// mudança de cor da página 
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
// validação formulário
const form = document.getElementById('form-contato');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valido = true;

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');

    document.querySelectorAll('.erro').forEach(e => e.textContent = '');

    if (nome.value.trim() === '') {
        document.getElementById('erro-nome').textContent = 'Por favor, informe seu nome!';
        valido = false;
    }

    if (email.value.trim() === '') {
        document.getElementById('erro-email').textContent = 'Por favor, informe seu e-mail!';
        valido = false;
    } else if (!email.value.includes('@') | !email.value.includes('.')) {
        document.getElementById('erro-email').textContent = 'E-mail inválido.';
        valido = false;
    }

    if (assunto.value.trim() === '') {
        document.getElementById('erro-assunto').textContent = 'Por favor, informe o assunto!';
        valido = false;
    }

    if (mensagem.value.trim() === '') {
        document.getElementById('erro-mensagem').textContent = 'Por favor, informe uma mensagem!';
        valido = false;
    }

    if (valido) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
    }
});