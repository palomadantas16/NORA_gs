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

/*========================================
    Quiz Dinâmico
==========================================*/

const perguntas = [
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: false},
            {id: 2, opcao: 'B - ', correct: false},
            {id: 3, opcao: 'C - ', correct: true},
            {id: 4, opcao: 'D - ', correct: false}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: true},
            {id: 2, opcao: 'B - ', correct: false},
            {id: 3, opcao: 'C - ', correct: false},
            {id: 4, opcao: 'D - ', correct: false}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: false},
            {id: 2, opcao: 'B - ', correct: false},
            {id: 3, opcao: 'C - ', correct: false},
            {id: 4, opcao: 'D - ', correct: true}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: false},
            {id: 2, opcao: 'B - ', correct: true},
            {id: 3, opcao: 'C - ', correct: false},
            {id: 4, opcao: 'D - ', correct: false}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: false},
            {id: 2, opcao: 'B - ', correct: true},
            {id: 3, opcao: 'C - ', correct: false},
            {id: 4, opcao: 'D - ', correct: false}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: false},
            {id: 2, opcao: 'B - ', correct: false},
            {id: 3, opcao: 'C - ', correct: false},
            {id: 4, opcao: 'D - ', correct: true}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: true},
            {id: 2, opcao: 'B - ', correct: false},
            {id: 3, opcao: 'C - ', correct: false},
            {id: 4, opcao: 'D - ', correct: false}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: false},
            {id: 2, opcao: 'B - ', correct: false},
            {id: 3, opcao: 'C - ', correct: true},
            {id: 4, opcao: 'D - ', correct: false}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: false},
            {id: 2, opcao: 'B - ', correct: true},
            {id: 3, opcao: 'C - ', correct: false},
            {id: 4, opcao: 'D - ', correct: false}
        ]
    },
    {
        pergunta: 'Pergunta - ',
        respostas: [
            {id: 1, opcao: 'A - ', correct: false},
            {id: 2, opcao: 'B - ', correct: false},
            {id: 3, opcao: 'C - ', correct: false},
            {id: 4, opcao: 'D - ', correct: true}
        ]
    }
];

const perguntaElement = document.getElementById('pergunta');
const respButtons = document.getElementById('resp-buttons');
const proxButton = document.getElementById('prox-btn');

let perguntaAtualIndex = 0;
let resultado = 0;

function inicioQuiz(){
    perguntaAtualIndex = 0;
    resultado = 0;
    proxButton.innerHTML = "Próxima";
    mostrarPergunta();
}

function resetEstado(){
    proxButton.style.display = 'none';
    while(respButtons.firstChild){
        respButtons.removeChild(respButtons.firstChild);
    }
}

function mostrarPergunta(){
    resetEstado();
    let perguntaAtual = perguntas[perguntaAtualIndex];
    let perguntaNo = perguntaAtualIndex + 1;
    perguntaElement.innerHTML = perguntaNo + '. ' + perguntaAtual.pergunta;

    perguntaAtual.respostas.forEach((resposta) => {
        const button = document.createElement('button');
        button.innerHTML = resposta.opcao;
        button.dataset.id = resposta.id;
        button.classList.add('btn');
        button.addEventListener('click', selectResposta);
        respButtons.appendChild(button);
    })
}

function selectResposta(e){
    respostas = perguntas[perguntaAtualIndex].respostas;
    const respostaCorreta = respostas.filter((resposta) => resposta.correct == true)[0];

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.id == respostaCorreta.id;
    if(isCorrect){
        selectedButton.classList.add('correct');
        resultado++;
    }else{
        selectedButton.classList.add('incorrect');
    }
    Array.from(respButtons.children).forEach((button) => {
       button.disabled = true;
    });

    proxButton.style.display = 'block';
}

proxButton.addEventListener('click', () => {
    if(perguntaAtualIndex < perguntas.length){
        tratarProxButton();
    }else{
        inicioQuiz();
    }
})

function tratarProxButton(){
    perguntaAtualIndex++;
    if(perguntaAtualIndex < perguntas.length){
        mostrarPergunta();
    }else{
        mostrarResultado();
    }
}

function mostrarResultado(){
    resetEstado();
    perguntaElement.innerHTML = `Você acertou ${resultado} de ${perguntas.length}!`;
    proxButton.innerHTML = `Jogar Novamente`;
    proxButton.style.display = 'block';
}

inicioQuiz();