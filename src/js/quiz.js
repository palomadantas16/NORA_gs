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

/*========================================
    SlideShow - Carrossel
==========================================*/
const imagens = [
    '../assets/img/slide1.jpeg',
    '../assets/img/slide2.jpeg',
    '../assets/img/slide3.jpeg',
    '../assets/img/slide4.png'
];

let indice = 0;

function mostrarSlide() {
    document.getElementById('imagem').src = imagens[indice];
}

function proximoSlide() {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    mostrarSlide();
}

function voltarSlide() {
    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    mostrarSlide();
}

// Troca automática a cada 5 segundos
setInterval(proximoSlide, 5000);

/*========================================
    Quiz Dinâmico
==========================================*/

const perguntas = [
    {
        pergunta: 'Segundo o projeto, qual é um dos principais riscos para os alimentos em missões espaciais?',
        respostas: [
            {id: 1, opcao: 'A - Falta de gravidade', correct: false},
            {id: 2, opcao: 'B - Radiação cósmica', correct: true},
            {id: 3, opcao: 'C - Excesso de comunicação', correct: false},
            {id: 4, opcao: 'D - Velocidade da nave', correct: false}
        ]
    },
    {
        pergunta: 'Quais fatores podem degradar os nutrientes dos alimentos durante missões espaciais?',
        respostas: [
            {id: 1, opcao: 'A - Temperatura, umidade, oxigênio e radiação', correct: true},
            {id: 2, opcao: 'B - Gravidade, internet e motores', correct: false},
            {id: 3, opcao: 'C - Painéis solares e combustível', correct: false},
            {id: 4, opcao: 'D - Luzes da cabine e antenas', correct: false}
        ]
    },
    {
        pergunta: 'Como a NASA classifica o problema da alimentação em missões espaciais de longa duração?',
        respostas: [
            {id: 1, opcao: 'A - Risco verde', correct: false},
            {id: 2, opcao: 'B - Risco amarelo', correct: false},
            {id: 3, opcao: 'C - Risco azul', correct: false},
            {id: 4, opcao: 'D - Risco vermelho', correct: true}
        ]
    },
    {
        pergunta: 'Qual material é utilizado na camada de proteção passiva da NORA?',
        respostas: [
            {id: 1, opcao: 'A - Alumínio', correct: false},
            {id: 2, opcao: 'B - Titânio', correct: false},
            {id: 3, opcao: 'C - HDPE', correct: true},
            {id: 4, opcao: 'D - Fibra de carbono', correct: false}
        ]
    },
    {
        pergunta: 'Qual sistema é responsável pelo monitoramento da cápsula?',
        respostas: [
            {id: 1, opcao: 'A - Raspberry Pi', correct: false},
            {id: 2, opcao: 'B - Arduino', correct: true},
            {id: 3, opcao: 'C - GPS', correct: false},
            {id: 4, opcao: 'D - Satélite', correct: false}
        ]
    },
    {
        pergunta: 'Qual componente é responsável pelo controle térmico da NORA?',
        respostas: [
            {id: 1, opcao: 'A - Painel térmico', correct: false},
            {id: 2, opcao: 'B - Ventoinha industrial', correct: false},
            {id: 3, opcao: 'C - Compressor espacial', correct: false},
            {id: 4, opcao: 'D - Célula Peltier', correct: true}
        ]
    },
    {
        pergunta: 'O sistema monitora diversas variáveis. Qual das opções abaixo é uma delas?',
        respostas: [
            {id: 1, opcao: 'A - Temperatura', correct: true},
            {id: 2, opcao: 'B - Velocidade orbital', correct: false},
            {id: 3, opcao: 'C - Quantidade de Vitamina C', correct: false},
            {id: 4, opcao: 'D - Distância até Marte', correct: false}
        ]
    },
    {
        pergunta: 'Qual é a função da válvula solenóide presente no projeto?',
        respostas: [
            {id: 1, opcao: 'A - Resfriar os alimentos', correct: false},
            {id: 2, opcao: 'B - Produzir oxigênio', correct: false},
            {id: 3, opcao: 'C - Reinjetar nitrogênio quando necessário', correct: true},
            {id: 4, opcao: 'D - Detectar radiação', correct: false}
        ]
    },
    {
        pergunta: 'Qual é uma das vantagens da NORA apresentada no projeto?',
        respostas: [
            {id: 1, opcao: 'A - Operação totalmente autônoma', correct: true},
            {id: 2, opcao: 'B - Produção de alimentos', correct: true},
            {id: 3, opcao: 'C - Propulsão espacial', correct: false},
            {id: 4, opcao: 'D - Comunicação interplanetária', correct: false}
        ]
    },
    {
        pergunta: 'Quem pode se beneficiar diretamente da solução NORA?',
        respostas: [
            {id: 1, opcao: 'A - Astronautas', correct: false},
            {id: 2, opcao: 'B - Pesquisadores e agências espaciais', correct: false},
            {id: 3, opcao: 'C - Empresas privadas do setor aeroespacial', correct: false},
            {id: 4, opcao: 'D - Todas as alternativas', correct: true}
        ]
    }
];

const perguntaElement = document.getElementById('pergunta');
const respButtons = document.getElementById('resp-buttons');
const proxButton = document.getElementById('prox-btn');

let perguntaAtualIndex = 0;
let resultado = 0;

function inicioQuiz(){
    proxButton.classList.remove('btn-final');
    document.getElementById('quiz-container').style.display = 'block'; // ← faltava
    document.getElementById('iniciar-btn').style.display = 'none';     // ← faltava
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

function tratarProxButton(){
    perguntaAtualIndex++;
    if(perguntaAtualIndex < perguntas.length){
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

proxButton.addEventListener('click', () => {
    if(proxButton.innerHTML === 'Jogar Novamente'){
        inicioQuiz();
    } else {
        tratarProxButton();
    }
});

function mostrarResultado(){
    resetEstado();

    perguntaElement.innerHTML = `
        <div class="resultado-final">
            <h3>Resultado final</h3>
            <p>Você acertou <strong>${resultado}</strong> de <strong>${perguntas.length}</strong>!</p>
        </div>
    `;

    proxButton.innerHTML = 'Jogar Novamente';
    proxButton.classList.add('btn-final');
    proxButton.style.display = 'block';
}


document.getElementById('iniciar-btn').addEventListener('click', inicioQuiz);