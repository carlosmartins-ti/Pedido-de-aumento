const botao = document.querySelector('#neg');

/* FUNÇÃO PARA O BOTÃO FUGIR SEM NUNCA SAIR DA TELA */
function moveButton() {
    botao.style.position = 'fixed';  
    botao.style.transform = 'none';

    const padding = 10; 
    const larguraBotao = botao.offsetWidth;
    const alturaBotao = botao.offsetHeight;

    const maxX = window.innerWidth - larguraBotao - padding;
    const maxY = window.innerHeight - alturaBotao - padding;

    const x = padding + Math.random() * maxX;
    const y = padding + Math.random() * maxY;

    botao.style.left = `${x}px`;
    botao.style.top = `${y}px`;
}

/* PC: fugir no hover */
botao.addEventListener('mouseover', moveButton);

/* CELULAR: fugir no toque */
botao.addEventListener('touchstart', function (e) {
    e.preventDefault(); 
    moveButton();
}, { passive: false });


/* GARANTE QUE O VÍDEO RODE NO CELULAR APÓS O PRIMEIRO TOQUE */
const video = document.getElementById('bg-video');

document.addEventListener('click', () => {
    if (video && video.paused) {
        video.play().catch(() => {});
    }
}, { once: true });
