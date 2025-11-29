const botao = document.querySelector('#neg');

let moveX = 0;
let moveY = 0;

botao.addEventListener("mouseover", function () {
    moveX = (Math.random() * 801 - 400);
    moveY = (Math.random() * 401 - 400); 

    botao.style.transform = `translate(${moveX}px, ${moveY}px)`; 
})